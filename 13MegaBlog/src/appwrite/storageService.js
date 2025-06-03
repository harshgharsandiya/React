import { Client, Storage, ID } from 'appwrite';

import config from '../config/config';

export class StorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.storage = new Storage(this.client);
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error)
            return null;
        }
    }

    // file delete service
    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", error)
            return null;
        }
    }

    // file preview service
    async getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.error("Appwrite service :: previewFile :: error", error)
            return null;
        }
    }
};



const storageService = new StorageService();

export default storageService;