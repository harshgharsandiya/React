import { Client, Account, ID } from "appwrite";

import config from "../config/config";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email, 
                password, 
                name
            );

            if (userAccount){
                //call another method to directly login
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error) {
            console.error("Appwrite service :: login :: error", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;

