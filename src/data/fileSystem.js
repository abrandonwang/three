const fileSystem = {
  id: "root",
  name: "brandonwang",
  type: "folder",
  children: [
    {
      id: "about",
      name: "About Me",
      type: "folder",
      icon: "person",
      children: [
        {
          id: "bio",
          name: "Bio.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 15, 2026",
            size: "2 KB",
            kind: "Text Document"
          },
          content: "Hey, I'm Brandon. I'm studying cs at northwestern and love to explore new technologies and play music. I am most intrigued by web design and the many intricate layers to a deceptively simple discipline."
        },
        {
          id: "headshot",
          name: "headshot.png",
          type: "file",
          icon: "image",
          fileType: "image",
          meta: {
            modified: "Jan 15, 2026",
            size: "340 KB",
            kind: "PNG Image"
          },
          content: "/images/IMG_6116.png"
        },
        {
          id: "skills",
          name: "Skills.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 15, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "Languages: JavaScript, Python, C++, HTML, CSS\nFrameworks: React, GSAP\nTools: Git, VS Code, Figma\nCurrently Learning: Three.js, Node.js"
        }
      ]
    },
    {
      id: "projects",
      name: "Projects",
      type: "folder",
      icon: "folder",
      children: [
        {
          id: "portfolio",
          name: "Portfolio Site",
          type: "folder",
          icon: "folder",
          meta: {
            techStack: "React, GSAP",
            modified: "Feb 24, 2026",
            kind: "Folder"
          },
          children: [
            {
              id: "portfolio-readme",
              name: "README.md",
              type: "file",
              icon: "description",
              fileType: "text",
              meta: {
                modified: "Oct 24, 2025",
                size: "3 KB",
                kind: "Markdown"
              },
              content: "# Portfolio Site\n\nA personal portfolio website styled as a finder window. Built with React and GSAP for animations.\n\n## Features\n- finder-inspired UI\n- Folder navigation system\n- window popups\n- Responsive design"
            },
            {
              id: "portfolio-screenshot",
              name: "Preview.png",
              type: "file",
              icon: "image",
              fileType: "image",
              meta: {
                modified: "Oct 24, 2025",
                size: "450 KB",
                kind: "PNG Image"
              },
              content: "/images/preview.png"
            },
            {
              id: "portfolio-live",
              name: "LiveSite.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Jan 15, 2026",
                size: "--",
                kind: "URL"
              },
              content: "https://brandonwang.work"
            },
            {
              id: "portfolio-github",
              name: "GitHub.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Oct 24, 2025",
                size: "--",
                kind: "URL"
              },
              content: "https://github.com/abrandonwang/finderport"
            }
          ]
        },
        {
          id: "card-game",
          name: "Card Game",
          type: "folder",
          icon: "folder",
          meta: {
            techStack: "Javascript",
            modified: "Dec 30, 2024",
            kind: "Folder"
          },
          children: [
            {
              id: "card-readme",
              name: "README.md",
              type: "file",
              icon: "description",
              fileType: "text",
              meta: {
                modified: "Dec 30, 2024",
                size: "2 KB",
                kind: "Markdown"
              },
              content: "# Concentration\n\nSimple flipping card game used to initially develop my js skills. Goal is to flip two cards and match them correctly with the intent of solving it in the fewest number of moves and shortest amount of time possible."
            },
            {
              id: "card-github",
              name: "GitHub.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Dec 30, 2024",
                size: "--",
                kind: "URL"
              },
              content: "https://github.com/abrandonwang/card-game"
            }
          ]
        }
      ]
    },
    {
      id: "experience",
      name: "Experience",
      type: "folder",
      icon: "work",
      children: [
        {
          id: "resume",
          name: "Resume.pdf",
          type: "file",
          icon: "picture_as_pdf",
          fileType: "link",
          meta: {
            modified: "Feb 01, 2026",
            size: "156 KB",
            kind: "PDF Document"
          },
          content: "/files/Resume.pdf"
        },
        {
          id: "timeline",
          name: "Timeline.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Feb 01, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "September 2025 - Present: Started at Northwestern\nJune 2025: Graduated High School\nDecember 2024: Finished my economics research project"
        }
      ]
    },
    {
      id: "contact",
      name: "Contact",
      type: "folder",
      icon: "mail",
      children: [
        {
          id: "email",
          name: "Email.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 01, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "brandonwang@u.northwestern.edu\n\nFeel free to reach out!"
        },
        {
          id: "contact-github",
          name: "GitHub.url",
          type: "file",
          icon: "link",
          fileType: "link",
          meta: {
            modified: "Jan 01, 2026",
            size: "--",
            kind: "URL"
          },
          content: "https://github.com/abrandonwang"
        },
        {
          id: "contact-linkedin",
          name: "LinkedIn.url",
          type: "file",
          icon: "link",
          fileType: "link",
          meta: {
            modified: "Jan 01, 2026",
            size: "--",
            kind: "URL"
          },
          content: "https://linkedin.com/in/abrandonwang"
        }
      ]
    }
  ]
}

export default fileSystem