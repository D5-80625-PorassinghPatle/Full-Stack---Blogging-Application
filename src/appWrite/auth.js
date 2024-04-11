import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

// import { Client, Account } from "appwrite";

class AuthService {
    constructor() {
        this.client = new Client();
        this.account = new Account(this.client);
        
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("660533512d4b24fa7f1f");
    }

    async createAccount({ email, password, name }) {
        try {
            console.log(email, password, name);
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;
