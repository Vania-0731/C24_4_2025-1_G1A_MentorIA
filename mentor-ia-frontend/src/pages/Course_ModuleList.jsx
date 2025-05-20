import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import PendingTasks from "../components/home/PendingTasks";
import RecentGrades from "../components/home/RecentGrades";
import "./Home.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Course_ModuleList = () => {
    const { idCourse } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [modules, setModules] = useState([]);

    // Estado para controlar qué menú está abierto (almacena el id del módulo)
    const [openMenuId, setOpenMenuId] = useState(null);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/academic_management/courses/${idCourse}`
            )
            .then((response) => setCourseData(response.data))
            .catch((error) => console.error("Error fetching module:", error));

        axios
            .get("http://127.0.0.1:8000/api/module/modules/")
            .then((response) => {
                const filteredModules = response.data.filter(
                    (mod) => mod.course.id.toString() === idCourse
                );
                setModules(filteredModules);
            })
            .catch((error) => console.error("Error fetching modules:", error));
    }, [idCourse]);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                !event.target.closest(".menu-button") &&
                !event.target.closest(".menu-dropdown")
            ) {
                setOpenMenuId(null);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="home-container">
            <Navbar />
            <div className="content-wrapper">
                <Sidebar />
                <div className="main-content">
                    <div className="top-section">
                        <h1 className="main-title">
                            {courseData
                                ? courseData.subject.name
                                : "Cargando curso..."}
                        </h1>
                        <div className="actions">
                            <button className="add-course-btn">
                                + Añadir curso
                            </button>
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Buscar cursos..."
                                    className="search-input"
                                />
                                <button className="search-btn">🔍</button>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-layout">
                        <div
                            className="courses-container"
                            style={{ display: "flex", gap: "1rem" }}
                        >
                            <div
                                style={{
                                    width: "200px",
                                    padding: "1rem",
                                    backgroundColor: "#f7f7f7",
                                    borderRight: "1px solid #ddd",
                                    borderRadius: "0.5rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Secciones del curso
                                </h3>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li style={{ marginBottom: "0.5rem" }}>
                                        <Link
                                            to={`/courses/${idCourse}/materials`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#007bff",
                                            }}
                                        >
                                            Materiales
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: "0.5rem" }}>
                                        <Link
                                            to={`/courses/${idCourse}/assignments`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#007bff",
                                            }}
                                        >
                                            Tareas
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: "0.5rem" }}>
                                        <Link
                                            to={`/courses/${idCourse}/exams`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#007bff",
                                            }}
                                        >
                                            Evaluaciones
                                        </Link>
                                    </li>
                                </ul>
                                <Link
                                    to={`/courses/${idCourse}/modules/new`}
                                    style={{
                                        padding: "0.5rem",
                                        backgroundColor: "#007bff",
                                        color: "white",
                                        borderRadius: "4px",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    + Crear módulo
                                </Link>
                            </div>

                            <div
                                style={{
                                    flexGrow: 1,
                                    padding: "1rem",
                                    backgroundColor: "#fff",
                                    borderRadius: "0.5rem",
                                }}
                            >
                                {courseData ? (
                                    <>
                                        <p>
                                            Bienvenido al curso:{" "}
                                            <strong>
                                                {courseData.subject.name}
                                            </strong>
                                        </p>

                                        <h3 style={{ marginTop: "2rem" }}>
                                            Módulos del curso:
                                        </h3>
                                        {modules.length > 0 ? (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "1rem",
                                                }}
                                            >
                                                {modules.map((mod) => (
                                                    <div
                                                        key={mod.id}
                                                        style={{
                                                            border: "1px solid #ddd",
                                                            borderRadius: "8px",
                                                            padding: "1rem",
                                                            width: "100%",
                                                            boxShadow:
                                                                "0 2px 5px rgba(0,0,0,0.1)",
                                                            backgroundColor:
                                                                "#fafafa",
                                                            position:
                                                                "relative",
                                                        }}
                                                    >
                                                        <h4
                                                            style={{
                                                                margin: "0 0 0.5rem 0",
                                                            }}
                                                        >
                                                            Módulo #{mod.id}
                                                        </h4>

                                                        {/* Botón 3 puntos */}
                                                        <button
                                                            className="menu-button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setOpenMenuId(
                                                                    openMenuId ===
                                                                        mod.id
                                                                        ? null
                                                                        : mod.id
                                                                );
                                                            }}
                                                            style={{
                                                                position:
                                                                    "absolute",
                                                                top: "10px",
                                                                right: "10px",
                                                                background:
                                                                    "transparent",
                                                                border: "none",
                                                                fontSize:
                                                                    "20px",
                                                                cursor: "pointer",
                                                            }}
                                                            aria-label="Abrir menú de opciones"
                                                        >
                                                            &#x22EE;
                                                        </button>

                                                        {/* Menú desplegable */}
                                                        {openMenuId ===
                                                            mod.id && (
                                                            <ul
                                                                className="menu-dropdown"
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    top: "35px",
                                                                    right: "10px",
                                                                    listStyle:
                                                                        "none",
                                                                    margin: 0,
                                                                    padding:
                                                                        "0.5rem 0",
                                                                    backgroundColor:
                                                                        "white",
                                                                    boxShadow:
                                                                        "0 2px 8px rgba(0,0,0,0.15)",
                                                                    borderRadius:
                                                                        "4px",
                                                                    width: "180px",
                                                                    zIndex: 1000,
                                                                }}
                                                            >
                                                                <Link
                                                                    to={`/courses/1/modules/${mod.id}/materials/new`}
                                                                    style={{
                                                                        display:
                                                                            "block",
                                                                        padding:
                                                                            "0.5rem 1rem",
                                                                        textDecoration:
                                                                            "none",
                                                                        color: "#333",
                                                                    }}
                                                                    onClick={() =>
                                                                        setOpenMenuId(
                                                                            null
                                                                        )
                                                                    }
                                                                >
                                                                    Crear
                                                                    material
                                                                </Link>
                                                                <li
                                                                    style={{
                                                                        padding:
                                                                            "0.5rem 1rem",
                                                                        cursor: "pointer",
                                                                        borderBottom:
                                                                            "1px solid #eee",
                                                                    }}
                                                                    onClick={() => {
                                                                        alert(
                                                                            `Crear evaluación en módulo ${mod.id}`
                                                                        );
                                                                        setOpenMenuId(
                                                                            null
                                                                        );
                                                                    }}
                                                                >
                                                                    Crear
                                                                    evaluación
                                                                </li>
                                                                <li
                                                                    style={{
                                                                        padding:
                                                                            "0.5rem 1rem",
                                                                        cursor: "pointer",
                                                                        borderBottom:
                                                                            "1px solid #eee",
                                                                    }}
                                                                    onClick={() => {
                                                                        alert(
                                                                            `Crear tarea en módulo ${mod.id}`
                                                                        );
                                                                        setOpenMenuId(
                                                                            null
                                                                        );
                                                                    }}
                                                                >
                                                                    Crear tarea
                                                                </li>
                                                                <li
                                                                    style={{
                                                                        padding:
                                                                            "0.5rem 1rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    onClick={() => {
                                                                        alert(
                                                                            `Crear foro en módulo ${mod.id}`
                                                                        );
                                                                        setOpenMenuId(
                                                                            null
                                                                        );
                                                                    }}
                                                                >
                                                                    Crear foro
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>
                                                No hay módulos registrados para
                                                este curso.
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <p>Cargando información del curso...</p>
                                )}
                            </div>
                        </div>

                        {/* Sidebar lateral derecho */}
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

export default Course_ModuleList;
