const text = (id, value = "") => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

const link = (id, label = "", href = "#") => {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = label;
  element.href = href;
};

const renderList = (id, items, renderItem) => {
  const container = document.getElementById(id);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => container.appendChild(renderItem(item)));
};

const createNavItem = (item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.label;
  a.href = item.href;
  li.appendChild(a);
  return li;
};

const createMenuCard = (item) => {
  const article = document.createElement("article");
  article.className = "card";

  const name = document.createElement("h3");
  name.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = item.price;

  article.append(name, description, price);
  return article;
};

const createHoursItem = (item) => {
  const li = document.createElement("li");
  li.textContent = `${item.day}: ${item.time}`;
  return li;
};

const createSocialItem = (item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.label;
  a.href = item.href;
  li.appendChild(a);
  return li;
};

const render = (data) => {
  document.title = data.meta?.title || document.title;

  text("brand-name", data.brand?.name);

  renderList("nav-list", data.navigation || [], createNavItem);

  text("hero-kicker", data.hero?.kicker);
  text("hero-title", data.hero?.title);
  text("hero-subtitle", data.hero?.subtitle);
  link("hero-cta", data.hero?.cta?.label, data.hero?.cta?.href);

  text("about-title", data.about?.title);
  text("about-description", data.about?.description);

  text("menu-title", data.menu?.title);
  renderList("menu-items", data.menu?.items || [], createMenuCard);

  text("hours-title", data.hours?.title);
  renderList("hours-list", data.hours?.schedule || [], createHoursItem);

  text("contact-title", data.contact?.title);
  text("contact-address", data.contact?.address);
  link("contact-phone", data.contact?.phone, `tel:${data.contact?.phone || ""}`);
  link("contact-email", data.contact?.email, `mailto:${data.contact?.email || ""}`);

  renderList("social-list", data.social || [], createSocialItem);

  text("footer-note", data.footer?.note);
};

fetch("data.json")
  .then((response) => response.json())
  .then(render)
  .catch(() => {
    text("hero-title", "Content unavailable");
    text("hero-subtitle", "Could not load data.json");
  });
