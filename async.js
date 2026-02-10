const getData = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzg5NjJkNmQ0N2E0YjFhYmE5ZWRhN2NhZDNjMmJjMSIsIm5iZiI6MTc2MzYwNTcwNC41NzcsInN1YiI6IjY5MWU3Y2M4ZDczNDFjNDAxZDIxYTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mhp7Z3DsGeO5E8Oxk0D4nerJqeHkWRdsizGxIeqTVWE",
        accert: "application/json",
      },
    }
  );

  const data = await response.json();

  console.log(data);
};

getData();
