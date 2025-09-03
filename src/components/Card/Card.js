export default function Card({ title, body, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded p-4 ${className}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{body}</p>
    </div>
  );
}
