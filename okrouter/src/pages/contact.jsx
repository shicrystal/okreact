function Contact() {
  const list = [1, 2, 3];
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href="">
              {item}: {index}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
