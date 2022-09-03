import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./constants";

export const createBlog = async (userBlog) => {

    try {
        const res = await axios.post(`${API_BASE_URL}/api/articles`, userBlog);

    } catch (err) {
      
    }
}