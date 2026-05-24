export default {
	async fetch(request): Promise<Response> {
        const ip = request.headers.get("cf-connecting-ip");
        const asOrganization = request.cf?.asOrganization;
        const country = request.cf?.country;
        const city = request.cf?.city;
        const region = request.cf?.region;
        const postalCode = request.cf?.postalCode;
        const verifiedBot = request.cf?.botManagement.verifiedBot;
        const botScore = request.cf?.botManagement.score;

        const html = `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                            <meta charset="UTF-8">
                                <style>
                                    :root {
                                        --bg: #410121;
                                        --card-bg: #ffffff2a;
                                        --border: #ffffff33;
                                        --separator: #ffffff33;
                                        --text-main: #00175c;
                                        --text-secondary: #2b3962;
                                        --text-muted: #94a3b8;
                                        --accent: #00175c;
                                    }
                                    body {
                                        min-height: 100vh;
                                        letter-spacing: 0.03em;
                                        font-size: 2rem;
                                        background: linear-gradient(180deg, #d846fc 0%, #3F5EFB 100%);
                                        color: var(--text-main);
                                        font-family: monospace;
                                        margin: 0; padding: 2rem; display: flex; justify-content: center;
                                    }
                                    .grid {
                                        display: flex;
                                        flex-direction: column;
                                        gap: 1.5rem; width: 100%;
                                    }
                                    .card {
                                        background-color: var(--card-bg); border: 3px solid var(--border); border-radius: 12px; padding: 1.5rem;
                                    }
                                    .card-header {
                                        letter-spacing: 0.25em;
                                        text-align: center;
                                        color: var(--accent); margin-bottom: 1rem; border-bottom: 3px solid var(--separator); padding-bottom: 0.5rem;
                                    }
                                    .data-label { font-weight: 600; font-size: 1.5rem; }
                                    .data-value { color: var(--text-secondary); font-size: 1.5rem; }

                                    @media (min-width: 1000px) {
                                        body {
                                            font-size: 1.5rem;
                                        }
                                        .data-label { font-size: 1rem; }
                                        .data-value { font-size: 1rem; }
                                        .grid { width: 50%; }
                                    }
                                </style>
                            </head>
                            <body>
                            <div class="grid">
                                <div class="card">
                                    <div class="card-header">NETWORK</div>
                                    <div class="data-row">
                                        <span class="data-label">Connecting IP:</span>
                                        <span class="data-value">${ip || 'Unknown'}</span>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">GEOLOCATION</div>
                                    <div class="data-row">
                                        <span class="data-label">City:</span>
                                        <span class="data-value">${city || 'Unknown'}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Region:</span>
                                        <span class="data-value">${region || 'Unknown'}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Country:</span>
                                        <span class="data-value">${country || 'Unknown'}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Postal Code:</span>
                                        <span class="data-value">${postalCode || 'Unknown'}</span>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">BOT ANALYSIS</div>
                                    <div class="data-row">
                                        <span class="data-label">Organization:</span>
                                        <span class="data-value">${asOrganization || 'Unknown'}</span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Verified Bot:</span>
                                        <span class="data-value">
                                            ${verifiedBot ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                    <div class="data-row">
                                        <span class="data-label">Bot Score:</span>
                                        <span class="data-value">${botScore || 'Unknown'}</span>
                                    </div>
                                </div>
                            </div>
                            </body>
                        </html>`;
		return new Response(html, { headers: {"content-type": "text/html;charset=UTF-8"} });
	},
} satisfies ExportedHandler<Env>;
