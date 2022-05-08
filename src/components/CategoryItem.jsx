// npm
import { useState } from "react";
import { Link } from "react-router-dom";
// files
import slugify from "../scripts/slugify";

export default function CategoryItem({ item }) {
  const { title, id } = item;
  const [categoryData] = useState(item);

  // properties
  const slugTitle = slugify(title);
  return (
    <Link
      to={`/dashboard/${slugTitle}`}
      state={{ data: categoryData }}
      className="admin-item"
    >
      <div className="content">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
