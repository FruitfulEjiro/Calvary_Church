/** @format */

// NAVIGATION BAR

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");

// MINISTRY ROUTING

const men = document.querySelector(".men-ministry");
const women = document.querySelector(".women-ministry");
const youth = document.querySelector(".youth-ministry");
const children = document.querySelector(".children-ministry");
const navContainer = document.querySelector(".nav-container");

const menMinistry = () => {
  const svg = navContainer.querySelectorAll("svg g");
  men.classList.add("active");
  svg.fill = "#fff";
  const div = document.querySelector(".ministry-container");
  div.innerHTML = `
     <div
            class="ministry-wrapper-men d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-lg-5">
            <img
              src="./images/men-ministry.png"
              alt=""
              class="ministry-img mx-auto" />
            <div class="ministry-text">
              <h2
                class="ministry-header text-center text-lg-start m-lg-0 text-primary fw-bold mt-3 mb-lg-3">
                Men's Ministry
              </h2>
              <p class="text lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                deleniti maxime odio quo quia, placeat cupiditate, quas
                doloribus explicabo laudantium nostrum, voluptas repellendus
                culpa saepe ipsa iusto alias deserunt consectetur? Fugit dolorem
                error quos adipisci enim corporis, quis non in cumque est dolor
                magni possimus incidunt minus excepturi nulla praesentium unde?
                Minima maiores corporis esse deserunt vero quis recusandae
                voluptates consequuntur necessitatibus incidunt, tenetur laborum
                iure reprehenderit pariatur similique maxime blanditiis nostrum
                possimus minus! Voluptates unde vel dolor quas id esse rem
                veritatis aliquid vero. Animi, minima vero? Dolore perspiciatis
                obcaecati autem harum qui adipisci praesentium nesciunt aliquid
                non nemo, voluptates sunt totam repellat itaque animi
                consequatur libero recusandae facilis natus dolorum! In ducimus
                architecto culpa! Fuga ab iste veniam accusantium, illo,
                perferendis impedit sed quas deleniti dolore blanditiis omnis
                itaque illum rem repellendus, hic culpa. Dolorum quas quidem
                quasi! Voluptates alias accusamus quas officia, similique,
                veniam, dicta voluptate eum deleniti sint distinctio hic!
                Doloribus officia aperiam tenetur in dolores eius odio animi
                natus dolore vitae? Tempore voluptates excepturi, impedit sed
                maxime similique, dicta nesciunt necessitatibus ipsa tenetur
                cupiditate ea libero expedita accusantium quam perferendis
                obcaecati explicabo odio illo corrupti, labore quia distinctio
                accusamus. Sint iusto voluptatem aliquam sapiente dolorum?
              </p>
            </div>
          </div>
     `;
};

const womenMinistry = () => {
  const svg = navContainer.querySelectorAll("svg g");
  women.classList.add("active");
  svg.fill = "#fff";
  const div = document.querySelector(".ministry-container");
  div.innerHTML = `
     <div
            class="ministry-wrapper-men d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-lg-5">
            <img
              src="./images/women-ministry.png"
              alt=""
              class="ministry-img mx-auto" />
            <div class="ministry-text">
              <h2
                class="ministry-header text-center text-lg-start m-lg-0 text-primary fw-bold mt-3 mb-lg-3">
                Women's Ministry
              </h2>
              <p class="text lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                deleniti maxime odio quo quia, placeat cupiditate, quas
                doloribus explicabo laudantium nostrum, voluptas repellendus
                culpa saepe ipsa iusto alias deserunt consectetur? Fugit dolorem
                error quos adipisci enim corporis, quis non in cumque est dolor
                magni possimus incidunt minus excepturi nulla praesentium unde?
                Minima maiores corporis esse deserunt vero quis recusandae
                voluptates consequuntur necessitatibus incidunt, tenetur laborum
                iure reprehenderit pariatur similique maxime blanditiis nostrum
                possimus minus! Voluptates unde vel dolor quas id esse rem
                veritatis aliquid vero. Animi, minima vero? Dolore perspiciatis
                obcaecati autem harum qui adipisci praesentium nesciunt aliquid
                non nemo, voluptates sunt totam repellat itaque animi
                consequatur libero recusandae facilis natus dolorum! In ducimus
                architecto culpa! Fuga ab iste veniam accusantium, illo,
                perferendis impedit sed quas deleniti dolore blanditiis omnis
                itaque illum rem repellendus, hic culpa. Dolorum quas quidem
                quasi! Voluptates alias accusamus quas officia, similique,
                veniam, dicta voluptate eum deleniti sint distinctio hic!
                Doloribus officia aperiam tenetur in dolores eius odio animi
                natus dolore vitae? Tempore voluptates excepturi, impedit sed
                maxime similique, dicta nesciunt necessitatibus ipsa tenetur
                cupiditate ea libero expedita accusantium quam perferendis
                obcaecati explicabo odio illo corrupti, labore quia distinctio
                accusamus. Sint iusto voluptatem aliquam sapiente dolorum?
              </p>
            </div>
          </div>
     `;
};

const youthMinistry = () => {
  const svg = navContainer.querySelectorAll("svg g");
  youth.classList.add("active");
  svg.fill = "white";
  const div = document.querySelector(".ministry-container");
  div.innerHTML = `
     <div
            class="ministry-wrapper-men d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-lg-5">
            <img
              src="./images/youth-ministry.png"
              alt=""
              class="ministry-img mx-auto" />
            <div class="ministry-text">
              <h2
                class="ministry-header text-center text-lg-start m-lg-0 text-primary fw-bold mt-3 mb-lg-3">
                Youth's Ministry
              </h2>
              <p class="text lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                deleniti maxime odio quo quia, placeat cupiditate, quas
                doloribus explicabo laudantium nostrum, voluptas repellendus
                culpa saepe ipsa iusto alias deserunt consectetur? Fugit dolorem
                error quos adipisci enim corporis, quis non in cumque est dolor
                magni possimus incidunt minus excepturi nulla praesentium unde?
                Minima maiores corporis esse deserunt vero quis recusandae
                voluptates consequuntur necessitatibus incidunt, tenetur laborum
                iure reprehenderit pariatur similique maxime blanditiis nostrum
                possimus minus! Voluptates unde vel dolor quas id esse rem
                veritatis aliquid vero. Animi, minima vero? Dolore perspiciatis
                obcaecati autem harum qui adipisci praesentium nesciunt aliquid
                non nemo, voluptates sunt totam repellat itaque animi
                consequatur libero recusandae facilis natus dolorum! In ducimus
                architecto culpa! Fuga ab iste veniam accusantium, illo,
                perferendis impedit sed quas deleniti dolore blanditiis omnis
                itaque illum rem repellendus, hic culpa. Dolorum quas quidem
                quasi! Voluptates alias accusamus quas officia, similique,
                veniam, dicta voluptate eum deleniti sint distinctio hic!
                Doloribus officia aperiam tenetur in dolores eius odio animi
                natus dolore vitae? Tempore voluptates excepturi, impedit sed
                maxime similique, dicta nesciunt necessitatibus ipsa tenetur
                cupiditate ea libero expedita accusantium quam perferendis
                obcaecati explicabo odio illo corrupti, labore quia distinctio
                accusamus. Sint iusto voluptatem aliquam sapiente dolorum?
              </p>
            </div>
          </div>
     `;
};

const childrenMinistry = () => {
  const svg = navContainer.querySelectorAll("svg g");
  children.classList.add("active");
  svg.fill = "#fff";
  const div = document.querySelector(".ministry-container");
  div.innerHTML = `
     <div
            class="ministry-wrapper-men d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-lg-5">
            <img
              src="./images/children-ministry.png"
              alt=""
              class="ministry-img mx-auto" />
            <div class="ministry-text">
              <h2
                class="ministry-header text-center text-lg-start m-lg-0 text-primary fw-bold mt-3 mb-lg-3">
                Children's Ministry
              </h2>
              <p class="text lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                deleniti maxime odio quo quia, placeat cupiditate, quas
                doloribus explicabo laudantium nostrum, voluptas repellendus
                culpa saepe ipsa iusto alias deserunt consectetur? Fugit dolorem
                error quos adipisci enim corporis, quis non in cumque est dolor
                magni possimus incidunt minus excepturi nulla praesentium unde?
                Minima maiores corporis esse deserunt vero quis recusandae
                voluptates consequuntur necessitatibus incidunt, tenetur laborum
                iure reprehenderit pariatur similique maxime blanditiis nostrum
                possimus minus! Voluptates unde vel dolor quas id esse rem
                veritatis aliquid vero. Animi, minima vero? Dolore perspiciatis
                obcaecati autem harum qui adipisci praesentium nesciunt aliquid
                non nemo, voluptates sunt totam repellat itaque animi
                consequatur libero recusandae facilis natus dolorum! In ducimus
                architecto culpa! Fuga ab iste veniam accusantium, illo,
                perferendis impedit sed quas deleniti dolore blanditiis omnis
                itaque illum rem repellendus, hic culpa. Dolorum quas quidem
                quasi! Voluptates alias accusamus quas officia, similique,
                veniam, dicta voluptate eum deleniti sint distinctio hic!
                Doloribus officia aperiam tenetur in dolores eius odio animi
                natus dolore vitae? Tempore voluptates excepturi, impedit sed
                maxime similique, dicta nesciunt necessitatibus ipsa tenetur
                cupiditate ea libero expedita accusantium quam perferendis
                obcaecati explicabo odio illo corrupti, labore quia distinctio
                accusamus. Sint iusto voluptatem aliquam sapiente dolorum?
              </p>
            </div>
          </div>
     `;
};

// RESOURCES PAGE

const verseByVerse = document.querySelector(".verse-by-verse");
const wednesdayServices = document.querySelector(".wednesday-services");
const sundayServices = document.querySelector(".sunday-services");
const guestSpeakers = document.querySelector(".guest-speakers");
const characterStudies = document.querySelector(".character-studies");
const topicalStudies = document.querySelector(".topical-studies");
const conferences = document.querySelector(".conferences");

const verse = () => {
  const svg = navContainer.querySelectorAll("svg g");
  item2.classList.add("nav-hover-color");
  verseByVerse.classList.add("active");
  svg.fill = "#fff";
  const div = document.querySelector(".resources-container");
  div.innerHTML = `
     <div class="verse w-100 col d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-center gap-3">
          <div
            class="old-testament col d-flex flex-column align-items-center justify-content-center my-4">
            <p class="OT-heading fw-bold text-primary text-center m-0 p-3">
              Old Testament
            </p>
            <p class="genesis m-0 p-3">Genesis (0)</p>
            <p class="exodus m-0 p-3">Exodus (0)</p>
            <p class="leviticus m-0 p-3">Levitius (0)</p>
            <p class="numbers m-0 p-3">Numbers (0)</p>
            <p class="deuteronomy m-0 p-3">Deuteronomy (0)</p>
            <p class="joshua m-0 p-3">Joshua (0)</p>
            <p class="judges m-0 p-3">Judges (0)</p>
            <p class="ruth m-0 p-3">Ruth (0)</p>
            <p class="samuel1 m-0 p-3">1 Samuel (0)</p>
            <p class="samuel2 m-0 p-3">2 Samuel (0)</p>
            <p class="kings1 m-0 p-3">1 Kings (0)</p>
            <p class="kings2 m-0 p-3">2 Kings (0)</p>
            <p class="chronicles1 m-0 p-3">1 Chronicles (0)</p>
            <p class="chronicles2 m-0 p-3">2 Chronicles (0)</p>
            <p class="ezra m-0 p-3">Ezra (0)</p>
            <p class="nehemiah m-0 p-3">Nehemiah (0)</p>
            <p class="esther m-0 p-3">Esther (0)</p>
            <p class="job m-0 p-3">Job (0)</p>
            <p class="psalm m-0 p-3">Psalm (0)</p>
            <p class="proverbs m-0 p-3">Proverbs (0)</p>
            <p class="ecclesiastes m-0 p-3">Ecclesiastes (0)</p>
            <p class="song-of-solomon m-0 p-3">Song of Songs (0)</p>
            <p class="isaiah m-0 p-3">Isaiah (0)</p>
            <p class="jeremiah m-0 p-3">Jeremiah (0)</p>
            <p class="lamentations m-0 p-3">Lamentations (0)</p>
            <p class="ezekiel m-0 p-3">Ezekiel (0)</p>
            <p class="daniel m-0 p-3">Daniel (0)</p>
            <p class="hosea m-0 p-3">Hosea (0)</p>
            <p class="joel m-0 p-3">Joel (0)</p>
            <p class="amos m-0 p-3">Amos (0)</p>
            <p class="obadiah m-0 p-3">Obadiah (0)</p>
            <p class="jonah m-0 p-3">Jonah (0)</p>
            <p class="micah m-0 p-3">Micah (0)</p>
            <p class="nahum m-0 p-3">Nahum (0)</p>
            <p class="habakkuk m-0 p-3">Habakkuk (0)</p>
            <p class="zepheniah m-0 p-3">Zepheniah (0)</p>
            <p class="haggai m-0 p-3">Haggai (0)</p>
            <p class="zechariah m-0 p-3">Zechariah (0)</p>
            <p class="malachi m-0 p-3">Malachi (0)</p>
          </div>
          <div
            class="new-testament col d-flex flex-column align-items-center justify-content-center my-4">
            <p class="NT-heading fw-bold text-primary text-center m-0 p-3">
              New Testament
            </p>
            <p class="matthew m-0 p-3">Matthew (0)</p>
            <p class="mark1 m-0 p-3">Mark (0)</p>
            <p class="luke m-0 p-3">Luke (0)</p>
            <p class="john m-0 p-3">John (0)</p>
            <p class="acts m-0 p-3">Acts (0)</p>
            <p class="roman m-0 p-3">Roman (0)</p>
            <p class="corinthians1 m-0 p-3">1 Corinthians (0)</p>
            <p class="corinthians2 m-0 p-3">2 Corinthians (0)</p>
            <p class="galatians m-0 p-3">Galatians (0)</p>
            <p class="ephesians m-0 p-3">Ephesians (0)</p>
            <p class="phillipians m-0 p-3">Phillipians (0)</p>
            <p class="colossians m-0 p-3">Colossians (0)</p>
            <p class="thessalonians1 m-0 p-3">1 Thessalonians (0)</p>
            <p class="thessalonians2 m-0 p-3">2 Thessalonians (0)</p>
            <p class="timothy1 m-0 p-3">1 Timothy (0)</p>
            <p class="timothy2 m-0 p-3">2 Timothy (0)</p>
            <p class="titus m-0 p-3">Titus (0)</p>
            <p class="philemon m-0 p-3">Philemon (0)</p>
            <p class="nehemiah m-0 p-3">Nehemiah (0)</p>
            <p class="hebrews m-0 p-3">Hebrews (0)</p>
            <p class="james m-0 p-3">James (0)</p>
            <p class="peter1 m-0 p-3">1 Peter (0)</p>
            <p class="peter2 m-0 p-3">2 Peter (0)</p>
            <p class="john1 m-0 p-3">1 John (0)</p>
            <p class="john2 m-0 p-3">2 John (0)</p>
            <p class="john3 m-0 p-3">3 John (0)</p>
            <p class="jude m-0 p-3">Jude (0)</p>
            <p class="revelation m-0 p-3">Revelation (0)</p>
          </div>
        </div>
     `;
};

const dummyText = (e) => {
  const svg = navContainer.querySelectorAll("svg g");
  item2.classList.add("nav-hover-color");
  e.classList.add("active");
  svg.fill = "#fff";
  const div = document.querySelector(".resources-container");
  div.innerHTML = `
     <p class="dummy-text m-0 p-3 text-center">No Available Resources</p>
     `;
};

// ABOUT PAGE

const historyOfCCT = document.querySelector(".history-of-cct");
const statement = document.querySelector(".statement");
const leadership = document.querySelector(".leadership");

const aboutSection = () => {
  const ministryNav = navContainer.querySelectorAll(".color");
  const svg = navContainer.querySelectorAll("svg g");
  historyOfCCT.classList.add("active");
  ministryNav[0].classList.add("min-nav-color");
  svg.fill = "#fff";
  const div = document.querySelector(".about-container");
  div.innerHTML = `
     <div
          class="about-section d-flex flex-column align-items-center justify-content-center">
          <div class="about-us container py-4">
            <h4
              class="about-us-heading text-center text-primary fw-bolder mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 31 31"
                style="height: 23px; width: 23px; margin: 0rem 1rem 0rem 0rem">
                <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                  <path
                    d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                  <path
                    d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                  <path
                    d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                </g>
                <defs>
                  <clipPath id="NoteSvgDyn_svg__a">
                    <path fill="currentColor" d="M.505.5H30.5v30H.505z"></path>
                  </clipPath>
                </defs></svg
              >About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 31 31"
                style="height: 23px; width: 23px; margin: 0rem 0rem 0rem 1rem">
                <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                  <path
                    d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                  <path
                    d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                  <path
                    d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                </g>
                <defs>
                  <clipPath id="NoteSvgDyn_svg__a">
                    <path fill="currentColor" d="M.505.5H30.5v30H.505z"></path>
                  </clipPath>
                </defs>
              </svg>
            </h4>
            <div
              class="about-us-container d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-3">
              <p class="about-us-text">
                Calvary Chapel has been formed as a fellowship of believers in
                the Lordship of Jesus Christ. Our supreme desire is to know
                Christ, to grow our faith in Him and ultimately be conformed to
                His image by the power of the Holy Spirit and the Word of God
                (Rom 8:29; John 17:17). <br /><br />
                As there is within the Word of God everything that is needed for
                life and godliness (2 Pe 1:3) it becomes evident that without
                ample, clear and thorough Bible teaching in the church, such
                desired growth as described above will not be reached. This is
                why in CCT we prioritize teaching through the Bible during our
                weekly services. Imagine the power that is present as the Holy
                Spirit works in us through the teaching of the Word of God (2
                Tim 3:16-17; John 14:26). Come study His Word with us!
              </p>
              <img class="about-us-img" src="./images/about-2.jpg" alt="" />
            </div>
          </div>
          <div class="brief container-fluid py-4">
            <div class="brief-container container p-0">
              <h4
                class="brief-heading text-center text-white fw-bolder mb-3 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 31 31"
                  style="
                    height: 23px;
                    width: 23px;
                    margin: 0rem 0.5rem 0rem 0rem;
                  ">
                  <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                    <path
                      d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                    <path
                      d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                    <path
                      d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                  </g>
                  <defs>
                    <clipPath id="NoteSvgDyn_svg__a">
                      <path
                        fill="currentColor"
                        d="M.505.5H30.5v30H.505z"></path>
                    </clipPath>
                  </defs>
                </svg>
                A Brief History of CCT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 31 31"
                  style="
                    height: 23px;
                    width: 23px;
                    margin: 0rem 0rem 0rem 0.5rem;
                  ">
                  <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                    <path
                      d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                    <path
                      d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                    <path
                      d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                  </g>
                  <defs>
                    <clipPath id="NoteSvgDyn_svg__a">
                      <path
                        fill="currentColor"
                        d="M.505.5H30.5v30H.505z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </h4>
              <div
                class="brief-container d-flex flex-column align-items-center justify-content-center">
                <p class="brief-text text-white text-center">
                  Calvary Chapel Turku began in 2005 in a small apartment in
                  Varissuo Turku as a home Bible Study. Since then CCT has been
                  steadily teaching through the Bible with two weekly services,
                  one on Sunday and a midweek service on Wednesday evening.
                  Since the time of those original Bible studies in Varissuo,
                  CCT has relocated to Takamaantie 15 to accommodate the growing
                  number of people and ministries within the church.
                </p>
              </div>
            </div>
          </div>
          <div class="history container py-4">
            <h4
              class="history-heading text-center text-primary fw-bolder mb-4 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 31 31"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                  <path
                    d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                  <path
                    d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                  <path
                    d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                </g>
                <defs>
                  <clipPath id="NoteSvgDyn_svg__a">
                    <path fill="currentColor" d="M.505.5H30.5v30H.505z"></path>
                  </clipPath>
                </defs>
              </svg>
              History of Calvary Chapel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 31 31"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <g fill="currentColor" clip-path="url(#NoteSvgDyn_svg__a)">
                  <path
                    d="M12.325 12.805c1.468 0 2.937.007 4.406-.005.322-.003.42.076.416.335-.012.736 0 .736-.9.736h-8.3c-.44 0-.44 0-.442-.355-.003-.474.294-.71.892-.71h3.928Z"></path>
                  <path
                    d="M24.609 5.708c.302-.329.595-.667.91-.984 1.216-1.226 2.44-2.445 3.66-3.666.124-.123.248-.247.367-.373.182-.194.404-.223.641-.144.244.081.305.282.305.517-.003 1.555.026 3.111-.014 4.665-.043 1.694-.5 3.293-1.235 4.818-.73 1.512-1.775 2.78-2.977 3.932-.528.506-1.033 1.034-1.554 1.547-.16.156-.215.33-.215.555.006 4.4.005 8.8.005 13.2 0 .583-.133.715-.72.715-6.746 0-13.491-.012-20.236.01-1.496.006-2.821-1.147-3.012-2.53a3.266 3.266 0 0 1-.027-.447c-.002-7.686-.003-15.37 0-23.056a2.952 2.952 0 0 1 2.966-2.963c6.804-.005 13.607-.003 20.41-.002.454 0 .618.164.619.615V5.63l.106.076v.001Zm-1.185 11.633c-.078.066-.145.115-.203.173-.418.416-.841.827-1.248 1.253a.76.76 0 0 1-.598.246c-1.248-.006-2.495.006-3.743-.01-.295-.004-.496.098-.695.3-.702.72-1.413 1.43-2.13 2.134-.445.436-.453.428-.904.016-.307-.28-.304-.334-.008-.626.79-.783 1.576-1.571 2.368-2.353a.71.71 0 0 0 .219-.554c-.01-1.28-.003-2.562-.007-3.843a.71.71 0 0 1 .23-.55c.609-.59 1.203-1.194 1.802-1.793 1.567-1.568 3.134-3.137 4.705-4.702a.79.79 0 0 0 .26-.612c-.015-1.181-.007-2.363-.007-3.544 0-.335 0-.336-.328-.337h-4.292L3.772 2.54c-.438 0-.863.07-1.247.297-.72.429-.98 1.106-.98 1.9-.006 3.976-.003 7.952-.003 11.928 0 2.728 0 5.457.002 8.185 0 .079-.04.183.047.23.073.037.138-.041.196-.082.543-.383 1.143-.54 1.807-.539 6.505.006 13.01.004 19.515.003.355 0 .356 0 .356-.358v-6.489c0-.08.02-.165-.04-.273v-.001Zm-10.04 12.112h9.605c.52 0 .475.05.476-.463.002-1.031 0-2.062 0-3.093 0-.265-.131-.397-.394-.397-6.412 0-12.824 0-19.236-.002-.269 0-.53.033-.79.092-1.265.288-1.884 1.822-1.187 2.915.44.69 1.097.944 1.87.946 3.218.008 6.436.003 9.655.003Zm4.132-12.343.06.036c.321-.32.645-.638.966-.96 1.12-1.12 2.24-2.243 3.362-3.364 1.132-1.133 2.268-2.264 3.397-3.4.335-.338.327-.345.665.007.052.054.108.104.161.156.177.175.182.35.015.526l-.052.053c-.96.955-1.919 1.909-2.876 2.865-1.398 1.397-2.797 2.792-4.19 4.194-.228.23-.487.436-.699.75h.294c.757 0 1.514-.012 2.27.006.269.007.452-.09.632-.271 1.362-1.373 2.717-2.755 4.1-4.107 1.147-1.12 2.129-2.35 2.791-3.82.517-1.147.84-2.343.96-3.595.117-1.21.079-2.425.082-3.638 0-.054.024-.118-.052-.168-.06.05-.128.098-.185.155-1.701 1.704-3.4 3.41-5.102 5.113-2.12 2.119-4.244 4.234-6.362 6.354-.102.102-.236.195-.236.367v2.741h-.001Z"></path>
                  <path
                    d="M11.757 15.976c1.147 0 2.294.007 3.441-.005.252-.002.329.075.325.326-.01.716 0 .717-.702.717H8.337c-.342 0-.342-.001-.344-.346-.003-.461.23-.692.697-.692h3.067ZM13.396 9.591c1.795 0 3.59.007 5.385-.005.394-.003.515.076.51.335-.016.736 0 .736-1.1.736H8.043c-.536 0-.536 0-.54-.355-.003-.474.36-.71 1.092-.71h4.8ZM13.396 6.377c1.795 0 3.59.006 5.385-.006.394-.002.515.077.51.336-.016.735 0 .736-1.1.736H8.043c-.536 0-.536-.001-.54-.356-.003-.474.36-.71 1.092-.71h4.8ZM11.255 19.51c-.99 0-1.978-.006-2.967.004-.229.002-.3-.073-.3-.3.003-.741-.005-.741.727-.741h5.46c.344 0 .344 0 .345.345.003.46-.23.691-.697.691h-2.568ZM10.49 22.005c-.73 0-1.462-.009-2.193.005-.244.004-.33-.082-.307-.317.014-.14.012-.283 0-.423-.019-.22.052-.308.29-.307 1.488.01 2.975.009 4.462 0 .222 0 .3.077.282.29a2.79 2.79 0 0 0 0 .474c.02.226-.08.284-.291.281-.748-.01-1.495-.003-2.244-.003h.001Z"></path>
                </g>
                <defs>
                  <clipPath id="NoteSvgDyn_svg__a">
                    <path fill="currentColor" d="M.505.5H30.5v30H.505z"></path>
                  </clipPath>
                </defs>
              </svg>
            </h4>
            <div
              class="history-container d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-3">
              <img
                class="history-img mb-3"
                src="./images/chapel-history.jpg"
                alt="" />
              <p class="history-text">
                In 1965, Pastor Chuck Smith began his ministry at Calvary Chapel
                Costa Mesa with just 25 people. From the beginning, Pastor Chuck
                welcomed all, young and old, without judgment, placing his
                emphasis on the teaching of the Word of God. His simple, yet
                sound, biblical approach drew 25,000 people weekly.<br /><br />
                With a sincere concern for the lost, Pastor Chuck made room in
                his heart and his home for a generation of hippies and surfers,
                generating a movement of the Holy Spirit that spread from the
                West Coast to the East Coast, and now, throughout the world.
                What began as a small local church has now grown into an
                international ministry of over 1,800 fellowships throughout the
                world.<br /><br />
                Here in our website, we invite you to find out more about who we
                are today, what we believe, where we are throughout the world;
                and we invite you to join us as we meet and worship our
                wonderful Lord and Savior, study His Word, fellowship together,
                grow in His grace, and desire to make disciples and go into all
                the world. For a more in-depth look at the history of Calvary
                Chapel, we recommend reading The Reproducers. You can download a
                free digital copy as a PDF or ePub.
              </p>
            </div>
          </div>
        </div>
     `;
};

const statementSection = () => {
  const ministryNav = navContainer.querySelectorAll(".color");
  const svg = navContainer.querySelectorAll("svg g");
  statement.classList.add("active");
  ministryNav[0].classList.add("min-nav-color");
  svg.fill = "#fff";
  const div = document.querySelector(".about-container");
  div.innerHTML = `
     <div class="statement-section d-flex flex-column align-items-center justify-content-center gap-4 py-5">
          <h4 class="about-us-heading text-center text-white fw-bolder mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 30 30"
              style="height: 28px; width: 28px; margin: 0rem 0.5rem 0rem 0rem">
              <g fill="currentColor" clip-path="url(#FaithSvgDyn_svg__a)">
                <path
                  d="M8.656 20.321c.25-.474.483-.904.704-1.34.563-1.113 1.125-2.226 1.604-3.379.474-1.139.758-2.32.904-3.543.213-1.8.234-3.608.285-5.415.01-.39.016-.78.022-1.17.012-.812.684-1.476 1.495-1.5.457-.014.87.088 1.214.393.123.11.188.029.276-.038.708-.539 1.674-.482 2.256.14.259.277.404.606.412.992.024 1.193.04 2.386.082 3.578.048 1.363.142 2.724.377 4.07.222 1.272.71 2.45 1.245 3.614.528 1.148 1.122 2.262 1.702 3.384.03.06.042.135.132.172.056-.1.11-.2.167-.3.18-.318.398-.406.741-.26.424.178.839.378 1.255.573.904.424 1.805.85 2.709 1.274l2.817 1.318c.22.102.437.206.656.307.2.093.286.25.285.468 0 .219-.095.367-.291.463-1.086.53-2.17 1.063-3.255 1.596-1.035.509-2.069 1.02-3.104 1.528-1.183.58-2.367 1.156-3.55 1.735l-1.68.821c-.098.048-.194.102-.296.14-.209.079-.421.088-.593-.075-.172-.164-.175-.38-.094-.587.088-.225.192-.444.301-.659.073-.143.058-.22-.107-.276-.97-.332-1.698-.964-2.233-1.829-.073-.118-.11-.124-.187-.001-.537.86-1.261 1.498-2.232 1.83-.164.056-.182.134-.107.277.097.187.181.38.268.572.102.228.133.459-.054.654-.189.198-.425.18-.65.075-.757-.35-1.51-.707-2.266-1.062-1.431-.674-2.864-1.346-4.296-2.02l-3.659-1.724c-.5-.236-1-.474-1.503-.705-.225-.104-.401-.228-.405-.512-.004-.282.158-.415.384-.526 1.677-.831 3.351-1.666 5.025-2.502.712-.355 1.421-.715 2.132-1.072.076-.038.155-.074.236-.102.299-.103.515-.022.67.25.063.107.12.216.205.373Zm6.832-.506c0 1.412-.002 2.824 0 4.235 0 .187.013.374.035.56.157 1.377.888 2.31 2.18 2.81.205.078.301.027.391-.172.351-.773.72-1.539 1.085-2.306.491-1.035.977-2.073 1.48-3.102.118-.243.106-.439-.017-.676-.661-1.273-1.34-2.537-1.947-3.836-.488-1.046-.952-2.103-1.233-3.227-.287-1.144-.411-2.316-.49-3.49a61.066 61.066 0 0 1-.116-4.746 1.464 1.464 0 0 0-.055-.438c-.1-.339-.342-.497-.685-.441-.376.062-.625.38-.626.842-.004 2.683 0 5.366-.005 8.05 0 .153.056.218.2.258 1.005.284 1.64 1.063 1.753 2.106.114 1.053.247 2.104.372 3.156.05.417.112.834.143 1.253a.505.505 0 0 1-.462.549c-.24.021-.487-.19-.531-.46-.071-.43-.11-.865-.169-1.297-.14-1.034-.24-2.073-.362-3.11-.053-.457-.246-.833-.652-1.078-.073-.044-.157-.11-.237-.073-.095.043-.05.153-.05.233-.003 1.466-.002 2.933-.002 4.399v.001Zm-.973.025v-4.445c0-.248-.053-.278-.267-.153-.35.205-.576.507-.638.906-.09.593-.158 1.189-.23 1.784-.114.928-.22 1.856-.335 2.784-.036.29-.281.504-.532.483-.28-.024-.478-.257-.465-.57.014-.32.078-.634.118-.95.144-1.152.276-2.305.401-3.459.112-1.025.755-1.807 1.748-2.082.16-.045.204-.125.204-.281-.004-2.667-.004-5.335-.003-8.002 0-.201-.057-.386-.153-.558-.124-.225-.415-.353-.682-.313-.292.045-.427.172-.491.484-.026.121-.04.247-.04.37-.002 1.45-.013 2.9-.1 4.349-.075 1.239-.19 2.47-.458 3.683-.305 1.38-.892 2.658-1.505 3.92-.575 1.184-1.19 2.349-1.793 3.52a.381.381 0 0 0-.01.375c.315.652.625 1.307.934 1.963.575 1.22 1.15 2.44 1.721 3.66.065.139.14.186.29.132.416-.147.801-.342 1.138-.632.813-.703 1.137-1.62 1.145-2.663.012-1.435.003-2.87.004-4.305Zm-8.182 2.927a.425.425 0 0 0-.41.422.425.425 0 0 0 .415.416.426.426 0 0 0 .423-.433.426.426 0 0 0-.428-.405Zm17.332 0a.425.425 0 0 0-.423.408.436.436 0 0 0 .403.43c.23.011.436-.186.436-.419a.435.435 0 0 0-.416-.42ZM11.925 3.602c.01.204-.091.353-.275.441-.185.089-.376.077-.524-.066-.414-.401-.826-.806-1.221-1.224-.192-.204-.161-.479.031-.675a.473.473 0 0 1 .676-.012c.411.393.808.802 1.21 1.204.089.09.107.204.103.332ZM18.075 3.587a.482.482 0 0 1 .16-.376c.37-.369.735-.742 1.109-1.107.225-.22.51-.228.712-.035.216.207.228.496.004.728-.379.392-.767.775-1.157 1.157a.46.46 0 0 1-.54.095.446.446 0 0 1-.288-.463v.001ZM9.154 7.654c-.264 0-.529.003-.793-.001-.318-.006-.53-.208-.529-.498 0-.285.218-.497.53-.5a85.205 85.205 0 0 1 1.585 0c.298.003.514.215.52.487.005.285-.213.504-.52.51-.264.006-.528.001-.793.001ZM20.829 7.654c-.257 0-.514.003-.77-.002-.316-.006-.527-.212-.524-.503.003-.284.221-.491.535-.494a96.424 96.424 0 0 1 1.562 0c.314.002.535.21.537.493.003.293-.22.5-.548.505-.264.004-.528.001-.793 0ZM15.486 1.304c0 .265.005.53 0 .794-.007.323-.186.506-.486.509-.296.002-.48-.183-.483-.506a80.172 80.172 0 0 1 0-1.611c.004-.328.176-.493.492-.49.298.003.468.173.476.486.006.273 0 .545 0 .818h.001Z"></path>
              </g>
              <defs>
                <clipPath id="FaithSvgDyn_svg__a">
                  <path fill="#fff" d="M.003 0h29.994v30H.003z"></path>
                </clipPath>
              </defs></svg
            >WHAT WE BELEIVE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 30 30"
              style="height: 28px; width: 28px; margin: 0rem 0rem 0rem 0.5rem">
              <g fill="currentColor" clip-path="url(#FaithSvgDyn_svg__a)">
                <path
                  d="M8.656 20.321c.25-.474.483-.904.704-1.34.563-1.113 1.125-2.226 1.604-3.379.474-1.139.758-2.32.904-3.543.213-1.8.234-3.608.285-5.415.01-.39.016-.78.022-1.17.012-.812.684-1.476 1.495-1.5.457-.014.87.088 1.214.393.123.11.188.029.276-.038.708-.539 1.674-.482 2.256.14.259.277.404.606.412.992.024 1.193.04 2.386.082 3.578.048 1.363.142 2.724.377 4.07.222 1.272.71 2.45 1.245 3.614.528 1.148 1.122 2.262 1.702 3.384.03.06.042.135.132.172.056-.1.11-.2.167-.3.18-.318.398-.406.741-.26.424.178.839.378 1.255.573.904.424 1.805.85 2.709 1.274l2.817 1.318c.22.102.437.206.656.307.2.093.286.25.285.468 0 .219-.095.367-.291.463-1.086.53-2.17 1.063-3.255 1.596-1.035.509-2.069 1.02-3.104 1.528-1.183.58-2.367 1.156-3.55 1.735l-1.68.821c-.098.048-.194.102-.296.14-.209.079-.421.088-.593-.075-.172-.164-.175-.38-.094-.587.088-.225.192-.444.301-.659.073-.143.058-.22-.107-.276-.97-.332-1.698-.964-2.233-1.829-.073-.118-.11-.124-.187-.001-.537.86-1.261 1.498-2.232 1.83-.164.056-.182.134-.107.277.097.187.181.38.268.572.102.228.133.459-.054.654-.189.198-.425.18-.65.075-.757-.35-1.51-.707-2.266-1.062-1.431-.674-2.864-1.346-4.296-2.02l-3.659-1.724c-.5-.236-1-.474-1.503-.705-.225-.104-.401-.228-.405-.512-.004-.282.158-.415.384-.526 1.677-.831 3.351-1.666 5.025-2.502.712-.355 1.421-.715 2.132-1.072.076-.038.155-.074.236-.102.299-.103.515-.022.67.25.063.107.12.216.205.373Zm6.832-.506c0 1.412-.002 2.824 0 4.235 0 .187.013.374.035.56.157 1.377.888 2.31 2.18 2.81.205.078.301.027.391-.172.351-.773.72-1.539 1.085-2.306.491-1.035.977-2.073 1.48-3.102.118-.243.106-.439-.017-.676-.661-1.273-1.34-2.537-1.947-3.836-.488-1.046-.952-2.103-1.233-3.227-.287-1.144-.411-2.316-.49-3.49a61.066 61.066 0 0 1-.116-4.746 1.464 1.464 0 0 0-.055-.438c-.1-.339-.342-.497-.685-.441-.376.062-.625.38-.626.842-.004 2.683 0 5.366-.005 8.05 0 .153.056.218.2.258 1.005.284 1.64 1.063 1.753 2.106.114 1.053.247 2.104.372 3.156.05.417.112.834.143 1.253a.505.505 0 0 1-.462.549c-.24.021-.487-.19-.531-.46-.071-.43-.11-.865-.169-1.297-.14-1.034-.24-2.073-.362-3.11-.053-.457-.246-.833-.652-1.078-.073-.044-.157-.11-.237-.073-.095.043-.05.153-.05.233-.003 1.466-.002 2.933-.002 4.399v.001Zm-.973.025v-4.445c0-.248-.053-.278-.267-.153-.35.205-.576.507-.638.906-.09.593-.158 1.189-.23 1.784-.114.928-.22 1.856-.335 2.784-.036.29-.281.504-.532.483-.28-.024-.478-.257-.465-.57.014-.32.078-.634.118-.95.144-1.152.276-2.305.401-3.459.112-1.025.755-1.807 1.748-2.082.16-.045.204-.125.204-.281-.004-2.667-.004-5.335-.003-8.002 0-.201-.057-.386-.153-.558-.124-.225-.415-.353-.682-.313-.292.045-.427.172-.491.484-.026.121-.04.247-.04.37-.002 1.45-.013 2.9-.1 4.349-.075 1.239-.19 2.47-.458 3.683-.305 1.38-.892 2.658-1.505 3.92-.575 1.184-1.19 2.349-1.793 3.52a.381.381 0 0 0-.01.375c.315.652.625 1.307.934 1.963.575 1.22 1.15 2.44 1.721 3.66.065.139.14.186.29.132.416-.147.801-.342 1.138-.632.813-.703 1.137-1.62 1.145-2.663.012-1.435.003-2.87.004-4.305Zm-8.182 2.927a.425.425 0 0 0-.41.422.425.425 0 0 0 .415.416.426.426 0 0 0 .423-.433.426.426 0 0 0-.428-.405Zm17.332 0a.425.425 0 0 0-.423.408.436.436 0 0 0 .403.43c.23.011.436-.186.436-.419a.435.435 0 0 0-.416-.42ZM11.925 3.602c.01.204-.091.353-.275.441-.185.089-.376.077-.524-.066-.414-.401-.826-.806-1.221-1.224-.192-.204-.161-.479.031-.675a.473.473 0 0 1 .676-.012c.411.393.808.802 1.21 1.204.089.09.107.204.103.332ZM18.075 3.587a.482.482 0 0 1 .16-.376c.37-.369.735-.742 1.109-1.107.225-.22.51-.228.712-.035.216.207.228.496.004.728-.379.392-.767.775-1.157 1.157a.46.46 0 0 1-.54.095.446.446 0 0 1-.288-.463v.001ZM9.154 7.654c-.264 0-.529.003-.793-.001-.318-.006-.53-.208-.529-.498 0-.285.218-.497.53-.5a85.205 85.205 0 0 1 1.585 0c.298.003.514.215.52.487.005.285-.213.504-.52.51-.264.006-.528.001-.793.001ZM20.829 7.654c-.257 0-.514.003-.77-.002-.316-.006-.527-.212-.524-.503.003-.284.221-.491.535-.494a96.424 96.424 0 0 1 1.562 0c.314.002.535.21.537.493.003.293-.22.5-.548.505-.264.004-.528.001-.793 0ZM15.486 1.304c0 .265.005.53 0 .794-.007.323-.186.506-.486.509-.296.002-.48-.183-.483-.506a80.172 80.172 0 0 1 0-1.611c.004-.328.176-.493.492-.49.298.003.468.173.476.486.006.273 0 .545 0 .818h.001Z"></path>
              </g>
              <defs>
                <clipPath id="FaithSvgDyn_svg__a">
                  <path fill="#fff" d="M.003 0h29.994v30H.003z"></path>
                </clipPath>
              </defs>
            </svg>
          </h4>

          <div
            class="bible container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="bible-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >BIBLE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="bible-text m-0">
              In the inerrancy of Scripture: That the Bible, Old and New
              Testaments, in the original autographs, is the inspired,
              infallible Word of God, a complete and final written revelation of
              God. We reject doctrinal viewpoints or spiritual phenomena which
              find their basis for practice in the church solely on experience.
              We look to the Word of God for the basis of all our faith and
              practice. <br/> &nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp In the full historicity of the biblical record of
              primeval history, including the creation of the heavens and the
              earth in six literal days, the literal existence of Adam and Eve
              as the progenitors of all people, the literal fall in the Garden
              of Eden and resultant divine curse on creation, the worldwide
              cataclysmic deluge, and the origin of the nations and languages at
              the tower of Babel.
            </p>
          </div>

          <div
            class="God container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="God-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >GOD
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="God-text m-0">
              in one personal, Triune God, who manifests Himself in three separate persons: Father, Son and Holy Spirit. He is essentially Spirit, the creator of all, who is eternal, almighty, transcendent, sovereign, life, love, truth, wise, just, holy, pure, unchangeable and infallible in all things, yet relational and personal.
            </p>
          </div>

          <div
            class="Jesus container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="Jesus-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >JESUS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="Jesus-text m-0">
              That Jesus Christ is fully God and fully human, possessing two distinct natures which are co-joined in one person; that He was miraculously conceived by the Holy Spirit, born of the virgin Mary, lived a sinless and miraculous life, provided for the atonement of our sins by His vicarious substitutionary death on the Cross, was physically resurrected by the power of the Holy Spirit and physically ascended to the right hand of God the Father in heaven. Who after His ascension, poured out His Holy Spirit on the believers in Jerusalem, enabling them to fulfill His command to preach the Gospel to the entire world; an empowerment and obligation all believers since have shared in. One day Jesus will return in similar manner as He ascended (Acts 1:11; Matt 24:30).
            </p>
          </div>

          <div
            class="holy-spirit container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="holy-spirit-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >HOLY SPIRIT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="holy-spirit-text m-0">
              The Holy Spirit is the third person of the Godhead, thus He is a personal being not an impersonal force. He seals, indwells, sanctifies, baptizes, teaches, empowers, reveals, and guides the believer into all truth. The Holy Spirit gives gifts to whom He wills, which are valid for today, and ought to be exercised within scriptural guidelines. We as believers are to earnestly desire the best gifts, seeking to exercise them in love that the whole Body of Christ might be edified. We believe that love is more important than the most spectacular gifts, and without this love all exercise of spiritual gifts is worthless.
            </p>
          </div>

          <div
            class="man-sin container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="man-sin-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >MAN/SIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="man-sin-text m-0">
              That all people are by nature separated from God and are responsible for their own sin, but that salvation, redemption, and forgiveness are freely offered to all by the grace of our Lord Jesus Christ. When a person repents of their sin and places their faith in Jesus Christ as the Savior and Lord, trusting Him to save and submitting to His Lordship, that person is immediately born again and sealed by the Holy Spirit, all his/her sins are forgiven, and that person becomes a child of God
            </p>
          </div>

          <div
            class="salvation container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="salvation-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >SALVATION
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="salvation-text m-0">
              Salvation is initiated, attained, and procured by God through the death of Christ on the cross for our sins and His resurrection from the dead. The salvation Christ offers is available to all, and is received freely by grace alone and through faith in Christ alone, apart from good works, thereby justifying, sanctifying and eventually glorifying the believer
            </p>
          </div>

          <div
            class="church container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="church-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >CHURCH
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="church-text m-0">
              The universal Church is an organic body composed of all believers, both living and dead, who have been sealed by the Holy Spirit through faith in Jesus Christ for salvation. The church has the responsibility to worship the Lord and share the good news of Christ’s death and resurrection to the world, making disciples, baptizing believers, and teaching them to observe sound doctrine and live a morally pure life. We believe church government should be simple rather than a complex bureaucracy, with the utmost dependence upon the Holy Spirit to lead, rather than on fleshly promotion or worldly wisdom. The Lord has given the church two ordinances which are to continue until He returns — believers baptism by immersion and Holy Communion. Water baptism is not necessary for salvation, and cannot remove sins, but is a picture of the salvation already received by the believer. We believe the only true basis of Christian fellowship is Christ’s sacrificial agape love, which is greater than any secondary differences we possess, and without which we have no right to claim ourselves Christians.
            </p>
          </div>
          
          <div
            class="end-times container d-flex flex-column align-items-center justify-content-center py-3">
            <h4 class="end-times-heading text-center text-primary fw-bolder mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0.5rem 0rem 0rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path></svg
              >END TIMES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 25"
                style="
                  height: 23px;
                  width: 23px;
                  margin: 0rem 0rem 0rem 0.5rem;
                ">
                <path
                  fill="currentColor"
                  d="M9.786 24.5H8.07a1.716 1.716 0 0 1-1.714-1.714v-12H2.07A1.716 1.716 0 0 1 .357 9.07V7.357A1.716 1.716 0 0 1 2.07 5.643h4.286V2.214A1.716 1.716 0 0 1 8.07.5h1.715A1.716 1.716 0 0 1 11.5 2.214v3.429h4.286A1.716 1.716 0 0 1 17.5 7.357v1.714a1.717 1.717 0 0 1-1.714 1.715H11.5v12A1.717 1.717 0 0 1 9.786 24.5ZM2.07 7.357v1.714h6v13.715h1.715V9.07h6V7.357h-6V2.214H8.07v5.143h-6Z"></path>
              </svg>
            </h4>
            <p class="end-times-text m-0">
              We await the pre-tribulational rapture of the church, and we believe that at the Second Coming of Christ He will visibly set up his throne on earth and personally rule with His saints for 1000 years. This motivates us to holy living, heartfelt worship, committed service, diligent study of God’s Word, regular fellowship, and participation in baptism by immersion and in Holy Communion. We believe that the nation of Israel still has a special place in God’s plan and that all the promises of the God of Israel will be fulfilled
            </p>
          </div>
        </div>
     `;
};

const leadershipSection = () => {
  const ministryNav = navContainer.querySelectorAll(".color");
  const svg = navContainer.querySelectorAll("svg g");
  leadership.classList.add("active");
  ministryNav[0].classList.add("min-nav-color");
  svg.fill = "#fff";
  const div = document.querySelector(".about-container");
  div.innerHTML = `
     <div
          class="leadership-section container d-flex flex-column align-items-center justify-content-center gap-4">
          <div
            class="robert-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
            <img src="./images/robert.png" alt="" class="profile-img" />
            <div class="profile-write-up">
              <div
                class="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                <p class="profile-name m-0">Robert Pecoraro</p>
                <p class="title badge text-primary m-0">Pastor</p>
              </div>
              <div
                class="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 25 17"
                  style="margin-right: 10px; height: 20px; width: 40px">
                  <path
                    fill="#0E60BF"
                    d="M24.552 16.203a.424.424 0 0 0 .022-.13V.926a.42.42 0 0 0-.023-.131l-.005-.017a.423.423 0 0 0-.079-.132L24.462.64l-.004-.003a.429.429 0 0 0-.126-.092l-.01-.006a.421.421 0 0 0-.146-.035L24.161.5 24.147.5H.427L.415.501.4.503a.427.427 0 0 0-.148.035L.244.543a.423.423 0 0 0-.127.093L.112.639.107.647A.427.427 0 0 0 .028.78L.023.796A.42.42 0 0 0 0 .928v15.145c0 .046.01.09.023.133l.006.017a.428.428 0 0 0 .08.132l.004.007.006.005c.014.015.03.027.045.04l.021.017c.019.013.04.024.06.034l.015.008a.427.427 0 0 0 .168.034h23.718c.06 0 .117-.012.168-.035.008-.003.016-.008.023-.012a.441.441 0 0 0 .052-.03c.009-.005.016-.013.024-.02a.382.382 0 0 0 .042-.036l.007-.006.005-.009a.425.425 0 0 0 .078-.13l.007-.019ZM.855 1.897l7.198 6.574-7.198 6.627v-13.2ZM15.607 8.15c-.03.02-.061.036-.086.063-.01.01-.013.024-.021.034l-3.213 2.935L1.53 1.355h21.514l-7.437 6.794Zm-6.92.901 3.312 3.025a.426.426 0 0 0 .576 0l3.272-2.987 7.196 6.557H1.523L8.688 9.05Zm7.794-.542 7.238-6.61v13.206l-7.238-6.596Z"></path>
                </svg>
                <p class="mail m-0">robertpecoraro@calvarychapel.fi</p>
              </div>
              <p class="about-badge badge fw-bold p-2 rounded-pill">about me</p>
              <p class="profile-text">
                Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet
                et tristique vitae gravida sed imperdiet. Arcu porta porttitor
                sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                porta. Etiam imperdiet est ac volutpat mauris. Tellus amet
                scelerisque erat posuere amet tincidunt. Augue morbi et magna
                tellus. Convallis in luctus pulvinar velit. In aliquet in
                sodales curabitur. Sapien egestas quam euismod augue. Consequat
                felis morbi nibh eu at diam. Nam pellentesque integer amet nisi.
              </p>
            </div>
          </div>

          <div
            class="kyle-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
            <img src="./images/kyle.png" alt="" class="profile-img" />
            <div class="profile-write-up">
              <div
                class="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                <p class="profile-name m-0">Kyle Bentz</p>
                <p class="title badge text-primary m-0">Elder</p>
              </div>
              <div
                class="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 25 17"
                  style="margin-right: 10px; height: 20px; width: 40px">
                  <path
                    fill="#0E60BF"
                    d="M24.552 16.203a.424.424 0 0 0 .022-.13V.926a.42.42 0 0 0-.023-.131l-.005-.017a.423.423 0 0 0-.079-.132L24.462.64l-.004-.003a.429.429 0 0 0-.126-.092l-.01-.006a.421.421 0 0 0-.146-.035L24.161.5 24.147.5H.427L.415.501.4.503a.427.427 0 0 0-.148.035L.244.543a.423.423 0 0 0-.127.093L.112.639.107.647A.427.427 0 0 0 .028.78L.023.796A.42.42 0 0 0 0 .928v15.145c0 .046.01.09.023.133l.006.017a.428.428 0 0 0 .08.132l.004.007.006.005c.014.015.03.027.045.04l.021.017c.019.013.04.024.06.034l.015.008a.427.427 0 0 0 .168.034h23.718c.06 0 .117-.012.168-.035.008-.003.016-.008.023-.012a.441.441 0 0 0 .052-.03c.009-.005.016-.013.024-.02a.382.382 0 0 0 .042-.036l.007-.006.005-.009a.425.425 0 0 0 .078-.13l.007-.019ZM.855 1.897l7.198 6.574-7.198 6.627v-13.2ZM15.607 8.15c-.03.02-.061.036-.086.063-.01.01-.013.024-.021.034l-3.213 2.935L1.53 1.355h21.514l-7.437 6.794Zm-6.92.901 3.312 3.025a.426.426 0 0 0 .576 0l3.272-2.987 7.196 6.557H1.523L8.688 9.05Zm7.794-.542 7.238-6.61v13.206l-7.238-6.596Z"></path>
                </svg>
                <p class="mail m-0">kylebentz@calvarychapel.fi</p>
              </div>
              <p class="about-badge badge fw-bold p-2 rounded-pill">about me</p>
              <p class="profile-text">
                Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet
                et tristique vitae gravida sed imperdiet. Arcu porta porttitor
                sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                porta. Etiam imperdiet est ac volutpat mauris. Tellus amet
                scelerisque erat posuere amet tincidunt. Augue morbi et magna
                tellus. Convallis in luctus pulvinar velit. In aliquet in
                sodales curabitur. Sapien egestas quam euismod augue. Consequat
                felis morbi nibh eu at diam. Nam pellentesque integer amet nisi.
              </p>
            </div>
          </div>

          <div
            class="jaakko-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
            <img src="./images/jaako.png" alt="" class="profile-img" />
            <div class="profile-write-up">
              <div
                class="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                <p class="profile-name m-0">Jaakko Haapanen</p>
                <p class="title badge text-primary m-0">Elder</p>
              </div>
              <div
                class="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 25 17"
                  style="margin-right: 10px; height: 20px; width: 40px">
                  <path
                    fill="#0E60BF"
                    d="M24.552 16.203a.424.424 0 0 0 .022-.13V.926a.42.42 0 0 0-.023-.131l-.005-.017a.423.423 0 0 0-.079-.132L24.462.64l-.004-.003a.429.429 0 0 0-.126-.092l-.01-.006a.421.421 0 0 0-.146-.035L24.161.5 24.147.5H.427L.415.501.4.503a.427.427 0 0 0-.148.035L.244.543a.423.423 0 0 0-.127.093L.112.639.107.647A.427.427 0 0 0 .028.78L.023.796A.42.42 0 0 0 0 .928v15.145c0 .046.01.09.023.133l.006.017a.428.428 0 0 0 .08.132l.004.007.006.005c.014.015.03.027.045.04l.021.017c.019.013.04.024.06.034l.015.008a.427.427 0 0 0 .168.034h23.718c.06 0 .117-.012.168-.035.008-.003.016-.008.023-.012a.441.441 0 0 0 .052-.03c.009-.005.016-.013.024-.02a.382.382 0 0 0 .042-.036l.007-.006.005-.009a.425.425 0 0 0 .078-.13l.007-.019ZM.855 1.897l7.198 6.574-7.198 6.627v-13.2ZM15.607 8.15c-.03.02-.061.036-.086.063-.01.01-.013.024-.021.034l-3.213 2.935L1.53 1.355h21.514l-7.437 6.794Zm-6.92.901 3.312 3.025a.426.426 0 0 0 .576 0l3.272-2.987 7.196 6.557H1.523L8.688 9.05Zm7.794-.542 7.238-6.61v13.206l-7.238-6.596Z"></path>
                </svg>
                <p class="mail m-0">JaakkoHaapanen@calvarychapel.fi</p>
              </div>
              <p class="about-badge badge fw-bold p-2 rounded-pill">about me</p>
              <p class="profile-text">
                Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet
                et tristique vitae gravida sed imperdiet. Arcu porta porttitor
                sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                porta. Etiam imperdiet est ac volutpat mauris. Tellus amet
                scelerisque erat posuere amet tincidunt. Augue morbi et magna
                tellus. Convallis in luctus pulvinar velit. In aliquet in
                sodales curabitur. Sapien egestas quam euismod augue. Consequat
                felis morbi nibh eu at diam. Nam pellentesque integer amet nisi.
              </p>
            </div>
          </div>

          <div
            class="olli-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
            <img src="./images/olli.png" alt="" class="profile-img" />
            <div class="profile-write-up">
              <div
                class="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                <p class="profile-name m-0">Olli Förbom</p>
                <p class="title badge text-primary m-0">Board Member</p>
              </div>
              <div
                class="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 25 17"
                  style="margin-right: 10px; height: 20px; width: 40px">
                  <path
                    fill="#0E60BF"
                    d="M24.552 16.203a.424.424 0 0 0 .022-.13V.926a.42.42 0 0 0-.023-.131l-.005-.017a.423.423 0 0 0-.079-.132L24.462.64l-.004-.003a.429.429 0 0 0-.126-.092l-.01-.006a.421.421 0 0 0-.146-.035L24.161.5 24.147.5H.427L.415.501.4.503a.427.427 0 0 0-.148.035L.244.543a.423.423 0 0 0-.127.093L.112.639.107.647A.427.427 0 0 0 .028.78L.023.796A.42.42 0 0 0 0 .928v15.145c0 .046.01.09.023.133l.006.017a.428.428 0 0 0 .08.132l.004.007.006.005c.014.015.03.027.045.04l.021.017c.019.013.04.024.06.034l.015.008a.427.427 0 0 0 .168.034h23.718c.06 0 .117-.012.168-.035.008-.003.016-.008.023-.012a.441.441 0 0 0 .052-.03c.009-.005.016-.013.024-.02a.382.382 0 0 0 .042-.036l.007-.006.005-.009a.425.425 0 0 0 .078-.13l.007-.019ZM.855 1.897l7.198 6.574-7.198 6.627v-13.2ZM15.607 8.15c-.03.02-.061.036-.086.063-.01.01-.013.024-.021.034l-3.213 2.935L1.53 1.355h21.514l-7.437 6.794Zm-6.92.901 3.312 3.025a.426.426 0 0 0 .576 0l3.272-2.987 7.196 6.557H1.523L8.688 9.05Zm7.794-.542 7.238-6.61v13.206l-7.238-6.596Z"></path>
                </svg>
                <p class="mail m-0">robertpecoraro@calvarychapel.fi</p>
              </div>
              <p class="about-badge badge fw-bold p-2 rounded-pill">about me</p>
              <p class="profile-text">
                Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet
                et tristique vitae gravida sed imperdiet. Arcu porta porttitor
                sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                porta. Etiam imperdiet est ac volutpat mauris. Tellus amet
                scelerisque erat posuere amet tincidunt. Augue morbi et magna
                tellus. Convallis in luctus pulvinar velit. In aliquet in
                sodales curabitur. Sapien egestas quam euismod augue. Consequat
                felis morbi nibh eu at diam. Nam pellentesque integer amet nisi.
              </p>
            </div>
          </div>
        </div>
     `;
};

// SCHEDULE PAGE

function init() {
  switch (`${window.location.pathname}${window.location.search}`) {
    case "/ministry":
    case "/ministry?ministry=men":
      menMinistry();
      item1.classList.add("nav-hover-color");
      break;
    case "/ministry?ministry=women":
      womenMinistry();
      item1.classList.add("nav-hover-color");
      break;
    case "/ministry?ministry=youth":
      youthMinistry();
      item1.classList.add("nav-hover-color");
      break;
    case "/ministry?ministry=children":
      childrenMinistry();
      item1.classList.add("nav-hover-color");
      break;
    case "/resources":
    case "/resources?resources=Verse":
      verse();
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Wednesday-Services":
      dummyText(wednesdayServices);
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Sunday-Services":
      dummyText(sundayServices);
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Guest-Speakers":
      dummyText(guestSpeakers);
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Character-Studies":
      dummyText(characterStudies);
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Topical-Studies":
      dummyText(topicalStudies);
      item2.classList.add("nav-hover-color");
      break;
    case "/resources?resources=Conferences":
      dummyText(conferences);
      item2.classList.add("nav-hover-color");
      break;
    case "/about":
    case "/about?view=about":
      aboutSection();
      item4.classList.add("nav-hover-color");
      break;
    case "/about?view=statement":
      statementSection();
      item4.classList.add("nav-hover-color");
      break;
    case "/about?view=leadership":
      leadershipSection();
      item4.classList.add("nav-hover-color");
      break;
    case "/schedule":
      item3.classList.add("nav-hover-color");
      eventText.innerHTML = `No available upcoming schedules for this date`;
      upcoming.style.borderBottom = "3px solid #0e60bf";
      concluded.style.border = "none";
      upcoming.style.color = "#0e60bf";
      break;
    case "/contact":
      item5.classList.add("nav-hover-color");
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
