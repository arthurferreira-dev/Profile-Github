export const useNavigate = () => {
  return (url: string) => {
    window.location.href = url;
  };
};