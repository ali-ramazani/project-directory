import Papa from "papaparse";

// This is a placeholder for the CSV string. You might be loading this from a file or another source.
const csvString = `title,githubLink,demoLink,description,technologies,picture
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg",
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg",
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg",
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Spotify Rex","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"
"Omnifood","https://github.com/yourusername/yourproject","https://devpost.com/software/spotify-rex","Spotify Rex is a platform that transforms music streaming into a social experience. Users can recommend songs, explore friends' music, and engage with tracks through reactions and comments. It fosters community among music lovers, offering a space to connect, share, and discover new music together.","HTML, CSS, JavaScript, React","src/assets/spotify_rex.svg"


...`;

interface Project {
  title: string;
  githubLink: string;
  demoLink: string;
  description: string;
  technologies: string;
  picture: string;
}

const parseCSV = (): Project[] => {
  let projects: Project[] = [];

  Papa.parse(csvString, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      projects = results.data as Project[];
    },
  });

  return projects;
};

export default parseCSV;
