import axios from "axios";

const login = async (email, password, router, dispatch) => {
  try {
    const { data } = await axios.post("/api/users/login", {
      email,
      password,
    });
    dispatch({ type: "USER_LOGIN", payload: data });
    router.push("/");
  } catch (err) {
    alert(err.message);
  }
};

const fetchNotes = async (token, setNotes) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/notes`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setNotes(data);
  } catch (err) {
    alert(err.message);
  }
};

const fetchNote = async (id, token, setNewTitle, setNewDesc, setNoteId) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/notes/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setNewTitle(data.title);
    setNewDesc(data.desc);
    setNoteId(data._id);
  } catch (err) {
    alert(err.message);
  }
};

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

const removeNote = async (id, title, desc, token, router, dispatch) => {
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

export {
  login,
  fetchNotes,
  fetchNote,
  addNote,
  removeNote,
  editNote,
  restoreNote,
};
