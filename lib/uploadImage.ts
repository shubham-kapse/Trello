import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
       "6471ede169e1b45d7ea9",
        ID.unique(),
        file
    );
    return fileUploaded;
};

export default uploadImage;