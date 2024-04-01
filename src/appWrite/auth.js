import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        console.log("account created successfully ");
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
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (error) {
      console.log("aapwrite service :: getCurrentUser :: error", error);
      throw error;
    }
    return null;
  }
  
  async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        throw error;
    }
  }
}
//one should create a object of class to get all functionality /

//but we can direactly export he entire class obj

const authService = new AuthService();

export default authService;
