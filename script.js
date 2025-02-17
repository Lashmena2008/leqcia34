// async function postPosts() {
//   const response = await fetch("linkiInformaciistvis", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       apiKey: "",
//     },
//     body: {
//       ragac: "ssace",
//     },
//   });
// }

const getPosts = async () => {
    try {
      const response = await fetch("/aa.json");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  // const getRemotePosts = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     return await data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // // console.log(getPosts());
  // // getPosts();
  // getRemotePosts().then((data) => {
  //   console.log(data);
  // });
  
  // var posts;
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data) {
  //       data.forEach((post) => console.log(post));
  //     }
  //   })
  //   .catch((err) => console.error(err));
  
  const wrapper = document.getElementById("wrapper");
  
  const createMovie = (movie) => {
    const movieCard = document.createElement("div");
    const movieImage = document.createElement("img");
    const movieTitle = document.createElement("h1");
  
    movieCard.className = "movie_card";
    movieImage.className = "movie_image";
    movieTitle.className = "movie_title";
  
    // Set the movie image src or use a placeholder if it's not available
    movieImage.src = movie.posterURL
      ? movie.posterURL
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s";
    movieImage.alt = movie.title;
  
    // Add an onerror event listener to replace the image with a placeholder if it fails to load
    movieImage.onerror = () => {
      movieImage.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s";
    };
  
    movieTitle.textContent = movie.title;
  
    movieCard.append(movieImage, movieTitle);
  
    wrapper.append(movieCard);
  };
  
  fetch("https://api.sampleapis.com/movies/animation")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((movie) => {
        createMovie(movie);
      });
    })
    .catch((err) => {
      console.error(err);
    });
  
  fetch("https://api.sampleapis.com/movies/animation")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((movie) => {
        createMovie(movie);
      });
    })
    .catch((err) => {
      console.error(err);
    });
  
  
  
  
  
  
  