// Function that adds a course option
function newClass() {
    const userCourses = document.getElementById("newCourses");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "newCourse"
    input.placeholder = "Name of course";
    const deleteCourse = document.createElement("button");
    deleteCourse.type = "button";
    deleteCourse.textContent = "Delete course"

    deleteCourse.addEventListener("click", () => {
        userCourses.removeChild(input);
        userCourses.removeChild(deleteCourse);
    });

    userCourses.appendChild(input);
    userCourses.appendChild(deleteCourse);
}

// Function that takes the first image that the user uploads.
function loadImage() { 
    const imageUpload = document.getElementById("userImage").files[0];
    if (!imageUpload) {
        alert("No image selected!");
    }
    const imageUrl = URL.createObjectURL(imageUpload);
    console.log(imageUrl);
    return imageUrl;
}


// Function that shows the user input.
function submitAndShow() {

    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const proBackground = document.getElementById("proBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const classBackground = document.getElementById("classBackground").value;
    const primaryComputer = document.getElementById("primaryComputer").value;
    const funny = document.getElementById("funny").value;
    const more = document.getElementById("more").value;
    const image = loadImage();

    // Add the user's info to the page
    document.getElementById("userOutput").innerHTML = `
    <h2>${name}'s || ${mascot}</h2>
    <figure>
        <div class="gallery"><img src="${image}" alt="User uploaded image"></div>
        <figcaption><em>${imageCaption}</em></figcaption>
    </figure>
    <ul>
        <li><b>Personal Background:</b>  ${personalBackground}</li>
        <li><b>Professional Background:</b> ${proBackground}</li>
        <li><b>Academic Background:</b> ${academicBackground}</li>
        <li><b>Background in this Subject:</b> ${classBackground}</li>
        <li><b>Primary Computer Platform:</b> ${primaryComputer}</li>
        <li>
            <b>Courses I'm Taking & Why:</b>
            <ul>
                
            </ul>
        </li>
        <li><b>Funny/Interesting Item to Remember me by:</b> ${funny}</li>
        <li><b>I'd also like to Share:</b> ${more}</li>
    </ul>
    <fieldset>
        <a href="byo_intro.html">MAKE ANOTHER INTRO PAGE</a>
    </fieldset>
    `;

    // Delete everything in the form element.
    document.getElementById("userIntro").remove();
}