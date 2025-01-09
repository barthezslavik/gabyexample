// Function to create a 3D PGA graph
function createGraph(link, linkText) {
  // Create the main container
  const container = document.createElement("div");
  container.classList.add("content", "container", "mt-3");

  // Create the row and column structure
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const col = document.createElement("div");
  col.classList.add("col-md-12", "content");
  row.appendChild(col);

  // Add the title
  const title = document.createElement("h1");
  title.innerText = "Що таке геометрична алгебра?";
  col.appendChild(title);

  // Add the description
  const description = document.createElement("p");
  description.innerText = `Геометрична алгебра (ГА) — це потужна математична система, яка узагальнює 
    комплексні числа, кватерніони та лінійну алгебру для об'єднання перетворень та геометрії. 
    Нижче наведено швидку візуальну демонстрацію з використанням 3D проектної ГА (PGA). 
    Ви можете перетягувати точки та бачити, як оновлюються лінії/площини.`;
  col.appendChild(description);

  // Add the navigation link
  const navLink = document.createElement("a");
  navLink.href = link;
  navLink.innerText = linkText;
  col.appendChild(navLink);

  // Append the container to the body
  document.body.appendChild(container);
}

// Function to generate the PGA graph
function generateGraph() {
  // Create the 3D PGA algebra
  Algebra(3, 0, 1, () => {
    // Helper function to create points
    const point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);

    // Define three draggable points
    let A = point(0, 0.8, 0);
    let B = point(-0.8, -0.8, 0);
    let C = point(0.8, -0.8, 0);

    // Create and add the graph to the page
    document.body.appendChild(
      this.graph(
        () => {
          // Calculate lines between points
          let lineAB = A & B;
          let lineBC = B & C;
          let lineCA = C & A;

          return [
            0x224488, A, "A", B, "B", C, "C",
            0x268F00, lineAB, "A & B",
            0x3E7FFE, lineBC, "B & C",
            0xF62605, lineCA, "C & A",
          ];
        },
        {
          grid: true,
          labels: true,
          h: 0.6,
          p: -0.15,
          lineWidth: 3,
          pointRadius: 1,
          fontSize: 1,
          scale: 1,
        }
      )
    );
  });
}

// Dynamic initialization based on the page
function initializePage() {
  // Check the current URL to determine which page to render
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "1.html") {
    createGraph("2.html", "Step2");
  } else if (currentPage === "2.html") {
    createGraph("1.html", "Step1");
  }

  // Generate the 3D graph
  generateGraph();
}

// Call the initialization function on page load
document.addEventListener("DOMContentLoaded", initializePage);