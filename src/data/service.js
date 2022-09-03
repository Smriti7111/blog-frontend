import axios from "axios";
import { API_BASE_URL } from "./constants";

export const createBlog = async (userBlog) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/api/articles`, userBlog);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const deleteBlog = async (slug) => {
    try {
        const res = await axios.delete(`${API_BASE_URL}/api/articles/${slug}`)
        //window.location.reload(false);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const updateBlog = async (userBlog, slug) => {
    try {
        const res = await axios.patch(`${API_BASE_URL}/api/articles/${slug}`, userBlog);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}