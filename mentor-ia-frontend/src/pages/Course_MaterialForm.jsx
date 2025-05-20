// src/pages/CreateMaterialForm.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import PendingTasks from "../components/home/PendingTasks";
import RecentGrades from "../components/home/RecentGrades";
import "./Home.css";

const CreateMaterialForm = () => {
  const { idCourse, idModule } = useParams();
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("video");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [creationDate, setCreationDate] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/academic_management/courses/${idCourse}`)
      .then((res) => setCourseName(res.data.subject.name))
      .catch((err) => console.error(err));

    axios
      .get(`http://localhost:8000/api/module/modules/${idModule}/`)
      .then((res) => setModuleName(res.data.name || `#${idModule}`))
      .catch(() => setModuleName(`#${idModule}`));
  }, [idCourse, idModule]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let fileUrl = url;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await axios.post(
          "http://localhost:8000/materials/upload/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        fileUrl = uploadRes.data.url;
        setUrl(fileUrl);
      }

      await axios.post("http://localhost:8000/api/material/materials/", {
        module: idModule,
        title,
        description,
        type,
        url: fileUrl,
        creation_date: creationDate,
      });

      navigate(`/courses/${idCourse}/modules/`);
    } catch (error) {
      console.error("Error creando material:", error);
      alert("Hubo un error al crear el material.");
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />

        <div className="main-content">
          <div className="top-section">
            <h1 className="main-title">
              Crear material en: <strong>{courseName}</strong> / Módulo{" "}
              <strong>{moduleName}</strong>
            </h1>
            <div className="actions">
              <Link
                to={`/courses/${idCourse}/modules`}
                className="add-course-btn"
              >
                ← Volver a materiales
              </Link>
            </div>
          </div>

          <div className="dashboard-layout">
            <div
              style={{
                width: "200px",
                padding: "1rem",
                backgroundColor: "#f7f7f7",
                borderRight: "1px solid #ddd",
                borderRadius: "0.5rem",
                marginRight: "1rem",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                Secciones del curso
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={`/courses/${idCourse}/modules/${idModule}/materials`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Materiales
                  </Link>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={`/courses/${idCourse}/modules/${idModule}/assignments`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Tareas
                  </Link>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={`/courses/${idCourse}/modules/${idModule}/exams`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Evaluaciones
                  </Link>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={`/courses/${idCourse}/modules/${idModule}/forum`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Foro
                  </Link>
                </li>
              </ul>
            </div>

            <div
              style={{
                flexGrow: 1,
                padding: "1rem",
                backgroundColor: "#fff",
                borderRadius: "0.5rem",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <label>
                  Título del material:
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </label>

                <label>
                  Descripción:
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </label>

                <label>
                  Tipo de material:
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <option value="video">Video</option>
                    <option value="document">Documento</option>
                    <option value="link">Enlace</option>
                    <option value="other">Otro</option>
                  </select>
                </label>

                <label>
                  Archivo:
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.mov,.avi"
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </label>

                <input type="hidden" value={url} />

                <label>
                  Fecha de creación:
                  <input
                    type="datetime-local"
                    value={creationDate}
                    onChange={(e) => setCreationDate(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    padding: "0.75rem",
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Guardar material
                </button>
              </form>
            </div>

            <div className="sidebar-info">
              <PendingTasks />
              <RecentGrades />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMaterialForm;
