const API_URL = 'http://localhost:5000/api';

export const fetchFactoryInfo = async () => {
  const response = await fetch(`${API_URL}/factory`);
  return response.json();
};

export const fetchReactors = async () => {
  const response = await fetch(`${API_URL}/reactors`);
  return response.json();
};

export const fetchQuizQuestions = async () => {
  const response = await fetch(`${API_URL}/quiz`);
  return response.json();
};
