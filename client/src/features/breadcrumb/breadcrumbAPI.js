import axios from "axios";

const showbreadcrumb = async (path) => {
  try {
    if (path && Array.isArray(path) && path.length > 0) {
      path = encodeURIComponent(path.join("/"));
    } else {
      path = "root";
    }
    const res = await axios.get("/path/" + path);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

const breadcrumbAPI = {
  showbreadcrumb,
};

export default breadcrumbAPI;
