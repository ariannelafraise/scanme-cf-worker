export default {
	async fetch(request): Promise<Response> {
        const ip = request.headers.get("cf-connecting-ip");
        const asOrganization = request.cf?.asOrganization;
        const country = request.cf?.country;
        const city = request.cf?.city;
        const region = request.cf?.region;
        const postalCode = request.cf?.postalCode;

        const html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Kawaii Dashboard</title>
                            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Quicksand:wght@400;500&display=swap" rel="stylesheet">
                            <style>
                                :root {
                                    --bg: linear-gradient(135deg, #FFB8E1 0%, #F5C3D9 30%, #FDE6EC 50%, #FFF3E8 70%, #F7EDE4 100%);
                                    --card-bg: rgba(255, 255, 255, 0.85);
                                    --border: rgba(255, 255, 255, 0.6);
                                    --text-secondary: #7B4E83;
                                    --accent: #E91E63;
                                }
                                body {
                                    min-height: 100vh;
                                    letter-spacing: 0.03em;
                                    background: var(--bg);
                                    color: var(--text-main);
                                    font-family: 'Quicksand', 'Nunito', sans-serif;
                                    margin: 0;
                                    display: flex;
                                    justify-content: center;
                                }
                                .card {
                                    background-color: var(--card-bg);
                                    border: 3px solid var(--border);
                                    border-radius: 24px;
                                    padding: 2rem;
                                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                                }
                                .card-header {
                                    letter-spacing: 0.2em;
                                    text-align: center;
                                    color: var(--accent);
                                    margin-bottom: 1.5rem;
                                    font-size: 1.3rem;
                                    font-weight: 700;
                                }
                                .card-header::after {
                                    content: '';
                                    display: block;
                                    width: 46rem; height: 0.1rem;
                                    border-radius: 30px;
                                    background: linear-gradient(135deg, #FFB8E1, #F2A97A);
                                    margin: 1rem auto;
                                }
                                .data-row {
                                    position: relative;
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    margin-bottom: 1.2rem;
                                }
                                .data-label {
                                    font-weight: 600;
                                    color: var(--text-secondary);
                                    font-size: 1.3rem;
                                }
                                .data-value {
                                    color: var(--accent);
                                    font-weight: 700;
                                    font-family: 'Quicksand', monospace;
                                    font-size: 1.4rem;
                                }
                                @media (min-width: 900px) {
                                    body { font-size: 1.6rem; padding: 4rem 2rem; }
                                    .grid { width: 75%; max-width: 800px; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
                                    .card { min-width: 320px; }
                                    .data-label { font-size: 1.1rem; }
                                }
                                @media (max-width: 600px) {
                                    body { padding: 2rem 1rem; }
                                    .header-bar h1 { font-size: 1.8rem; }
                                    .card { padding: 1.5rem; }
                                }
                            </style>
                        </head>
                        <body>
                            <div class="grid">
                                <div class="card">
                                    <div class="card-header">IP Info</div>
                                    <div class="data-row">
                                        <span class="data-label">Connecting IP:</span>
                                        <span class="data-value">${ip}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">City:</span>
                                        <span class="data-value">${city}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Region:</span>
                                        <span class="data-value">${region}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Country:</span>
                                        <span class="data-value">${country}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Postal Code:</span>
                                        <span class="data-value">${postalCode}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Organization:</span>
                                        <span class="data-value">${asOrganization}</span>
                                    </div>
                                </div>
                            </div>
                        </body>
                        </html>`;
		return new Response(html, { headers: {"content-type": "text/html;charset=UTF-8"} });
	},
} satisfies ExportedHandler<Env>;
