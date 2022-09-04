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
        return res;
    } catch (err) {
        return err
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

export const formatDate = (dateString) => {
    const nth = function (d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const fortnightAway = new Date(dateString);
    const date = fortnightAway.getDate();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][fortnightAway.getMonth()];
    let newDate = `${date}${nth(
      date
    )} ${month}, ${fortnightAway.getFullYear()}`;
    return newDate;
  };