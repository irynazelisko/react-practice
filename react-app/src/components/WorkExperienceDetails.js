export default function WorkExperienceDetails({ title, description, name, link }) {
  return (
    <div className="work-descr">
      <span className="bold">Name of employer:</span> {name} <br />
      <span className="bold">Job title:</span> {title} <br />
      <span className="bold">Description:</span> {description} <br />
      <a href={link} className="link-description">Link</a>
    </div>
  );
};