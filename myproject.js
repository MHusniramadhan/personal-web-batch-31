let projects = []
// initialize empty array to store projects
function addProject(event) {
    event.preventDefault()

    let name = document.getElementById('input-project-name').value
    let description = document.getElementById('input-project-content').value
    let image = document.getElementById('input-project-image')
    let checkbox = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(item => item.value)
  // querySelectorAll adalah sebuah fungsi dari javascript yang bertujuan 
  // untuk memilih semua yang dipilih atau memilih selector CSS pada dokumen HTML.
    // Fungsi map ini digunakan untuk mengolah setiap element di array/object dan kemudian menghasilkan array/object baru
    image = URL.createObjectURL(image.files[0])
  // URL.createObjectURL Adalah cara untuk menangani file yang dikirimkan pengguna, hanya membuat symlink di memori ke file nyata
    let project = {
        name,
        description,
        image,
        postedAt: new Date(),
        checkbox
    }

    projects.push(project)
    // memanggil fungsi untuk menampilkan blog yang diperbarui ke HTML
    renderProject()
    //tampilkan array project ke konsol
  // console.table(project);
}
 // mendapatkan elemen wadah konten project
function renderProject() {
    let lengthData = projects.length
    let projectContainer = document.getElementById('contents')
    projectContainer.innerHTML = firstProject()
    // mengulang melalui array project untuk mengakses elemen

    for (let i = 0; i < lengthData; i++) {
      // tampilkan setiap project ke konsol
      // menyimpan data ke HTML menggunakan DOM innerHTML
      projectContainer.innerHTML += `
          <div class="project-list-item">
            <div class="project-image">
              <img src="${projects[i].image}" alt="" />
            </div>
              <div class="project-content">
              <h5><a href="project-detail.html" target="_blank"
              >${projects[i].name}</a>
              </h5>
              <div class="detail-project-content">
              ${getDistanceTime()} 
              <div class="tampil">
              <img src="assets/${projects[i].checkbox[0]}" name="boxes" />
              <img src="assets/${projects[i].checkbox[1]}" name="boxes" />
              <img src="assets/${projects[i].checkbox[2]}" name="boxes" />
              <img src="assets/${projects[i].checkbox[3]}" name="boxes" />
              </div>
              </div>
              <p>
              ${projects[i].description}
              </p>
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Delete</button>
              </div>
            </div>
      `
    }
}
//untuk memasukan konten awal
function firstProject() {
    return `
      <div class="project-list-item">
        <div class="project-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
          <div class="project-content">
          <h5><a href="project-detail.html" target="_blank"
          >Dumbways Mobile App- 2021</a>
          </h5>
          <div class="detail-project-content">
            12 Jul 2021 22:30 WIB 
            <div class="tampil">
              <img src="assets/playstore.png" alt="playstore" />
              <img src="assets/android.png" alt="android" />
              <img src="assets/java.png" alt="java" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, rem assumenda. Repellat quos officiis quisquam, veniam, 
            animi similique voluptatem repellendus vero mollitia in non voluptatibus error sunt. Aut, dicta praesentium. 
          </p>
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Delete</button>
          </div>
        </div>
    `
}


function getDistanceTime() {
    let startdate = document.getElementById('input-project-stardate').value
    let enddate = document.getElementById('input-project-enddate').value

    let date1 = new Date(startdate)
    let date2 = new Date(enddate)

    let time = Math.abs(date1 - date2);
    let duration = Math.floor(time / (1000 * 60 * 60 * 24))

    if (duration > 30) {
        return `1 Month ${duration - 30} Day`
    } else {
        return `${duration} Day`
    }

    console.log(duration);
}

//Math.abs() di JavaScript berfungsi untuk menghasilkan nilai absolut atau 
// nilai positif dari nilai negatif yang di tentukan didalam argumen angka didalam fungsi tersebut. 
