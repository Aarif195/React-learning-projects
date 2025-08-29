import supabase, { supabaseUrl } from "./supabase";




// Fetching/Storing of data from supabase with Query
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// Using Form Hook to create/edit Cabin (base function)
export async function createEditCabin(newCabin, id) {
  // Check if the cabin already has an image path (string from supabaseUrl)
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  // If it's a new image, create a unique image name (replace "/" to avoid issues)
  const imageName = hasImagePath
    ? null
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  // Decide which image path to use (existing path or new one in storage)
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create or edit cabin in the "cabins" table
  let query = supabase.from("cabins");

  if (!id)
    // If no id, it means we are creating a new cabin
    query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id)
    // If id exists, it means we are updating an existing cabin
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  // Execute query and return single row
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image only if it's a new image (not already in supabase)
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      // If image upload fails, delete the cabin record to keep data consistent
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created"
      );
    }
  }

  // Return the created or updated cabin data
  return data;
}

// Creating a Cabin (wrapper for clarity)
export async function createCabin(newCabin) {
  return createEditCabin(newCabin);
}

// Editing a Cabin (wrapper for clarity)
export async function editCabin(newCabin, id) {
  return createEditCabin(newCabin, id);
}

// Mutating/deleting Cabins
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
