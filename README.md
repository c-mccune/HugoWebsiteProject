# RAD Reads Collections

This is a Hugo project for "RAD Reads Collections", a visually-driven site for curating image galleries.

## Getting Started

### Prerequisites

- [Hugo (extended version, 0.126.0+)]
- [Git]

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPONAME.git
    cd YOUR_REPONAME
    ```

2.  **Run the Hugo server:**
    ```bash
    hugo server
    ```
    The site will be available at `http://localhost:1313/`.

## Adding Content

### Adding Images

Due to technical limitations, the sample images could not be automatically included. To add them, please follow these steps:

1.  Find three images for each of the following folders: `architecture`, `fonts`, and `colors`.
2.  Place the images inside their respective content folders:
    -   `content/folders/architecture/`
    -   `content/folders/fonts/`
    -   `content/folders/colors/`
3.  Ensure the images are in `.jpg` format.

### Creating New Folders

1.  Create a new directory under `content/folders/`. For example, `content/folders/new-collection/`.
2.  Add an `index.md` file with a `title` in the front matter:
    ```markdown
    ---
    title: "New Collection"
    ---
    ```
3.  Add your `.jpg` images to the `content/folders/new-collection/` directory.

## Deployment

The site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1.  Create a new repository on GitHub.
2.  Follow the instructions to push your local repository to GitHub.
3.  In your repository settings on GitHub, go to `Pages` and make sure the source is set to `Deploy from a branch` and the branch is `gh-pages`. 