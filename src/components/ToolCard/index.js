export default function ToolCard({ tool }) {
    return `
        <a href="${tool.link}" class="tool-card">
            <div class="tool-icon" style="background-color: ${tool.bgColor}">
                <img src="${tool.icon}" alt="${tool.name}">
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-meta">
                <span class="tool-category">${tool.category}</span>
                <span class="tool-rating">${tool.rating}</span>
            </div>
        </a>
    `;
}