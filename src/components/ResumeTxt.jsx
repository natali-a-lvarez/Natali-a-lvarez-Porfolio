import Resume from "../files/Natalia Alvarez Resume.pdf";

function ResumeTxt() {
  return (
    <div class="resume-text">
      <p>
        Check out my
        <span class="title-font">
          <a
            class="word-bold"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            _resume_
          </a>
        </span>
        here.
      </p>
    </div>
  );
}

export default ResumeTxt;
