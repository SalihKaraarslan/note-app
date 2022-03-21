import axios from "axios";

const addNote = async (title, desc, token, router) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      {
        title,
        desc,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    router.push("/");
  } catch (err) {
    alert(err.message);
  }
};

const removeNote = async (id, title, desc, token, dispatch, router) => {
  try {
    await axios.delete(`api/notes/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "ADD_DELETED_DATA",
      payload: { title, desc, token },
    });
    router.push("/");
  } catch (err) {
    alert(err.message);
  }
};

const editNote = async (title, desc, router, token) => {
  try {
    const { data } = await axios.put(
      `/api/notes/${router.query.id}`,
      {
        desc,
        title,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    router.push("/");
    alert("edit başarılı");
  } catch (err) {
    alert(err.message);
  }
};

const restoreNote = async (title, desc, token, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      {
        title,
        desc,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "REMOVE_DELETED_DATA",
      payload: title,
    });
  } catch (err) {
    alert(err.message);
  }
};

export { addNote, removeNote, editNote, restoreNote };
