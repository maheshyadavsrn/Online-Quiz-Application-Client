import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9090/api/quizzes"
});

export const createQuestion = async (quizQuestion) => {
    const response = await api.post("/create-new-question", quizQuestion);
    return response.data;
};

export const getAllQuestions = async () => {
    const response = await api.get("/all-questions");
    return response.data;
};

export const fetchQuizForUser = async (number, subject) => {
    const response = await api.get(`/quiz/fetch-questions-for-user?numOfQuestions=${number}&subject=${subject}`);
    return response.data;
};

export const getSubjects = async () => {
    const response = await api.get("/subjects");
    return response.data;
};

export const updateQuestion = async (id, question) => {
    const response = await api.put(`/question/${id}/update`, question);
    return response.data;
};

export const getQuestionById = async (id) => {
    const response = await api.get(`/question/${id}`);
    return response.data;
};

export const deleteQuestion = async (id) => {
    const response = await api.delete(`/question/${id}/delete`);
    return response.data;
};
