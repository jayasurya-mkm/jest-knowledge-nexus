export const slidesData = [
  {
    id: 1,
    badge: "",
    title: "",
    subtitle: "",
    layout: "hero-layout",
    image: "./assets/Banner.png",
    content: `
      <div class="hero-banner-container" style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 16px;">
        <img src="./assets/Banner.png" alt="Hero Banner" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.35; z-index: 1;" />
        <div class="hero-content-box" style="position: relative; z-index: 2; padding: 2.5rem; border-radius: 20px; max-width: 950px; text-align: center;">
          <h1 class="slide-main-heading" style="font-size: 2.8rem; margin-bottom: 1rem; line-height: 1.2;">Modern Angular Unit Testing with Jest and Testing Library</h1>
        </div>
      </div>
    `,
    notes: "Welcome everyone! In this presentation, we explore Modern Angular Unit Testing using Jest and Angular Testing Library."
  },
  {
    id: 2,
    badge: "FRAMEWORK OVERVIEW",
    title: "What is Jest ?",
    subtitle: "Jest is a JavaScript testing framework designed for simplicity, speed, and minimal configuration.",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.25rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.35rem 1.5rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.6rem;"><i class="ph ph-lightning"></i> 🚀 Framework Essence</div>
            <p style="font-size: 0.95rem; line-height: 1.55; color: var(--text-main); margin-bottom: 1rem;">
              Jest is a modern, open-source JavaScript testing framework developed and maintained by Meta for fast execution, minimal configuration overhead, and a great developer experience.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1rem;">
              <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 10px; padding: 0.65rem 0.8rem;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                  ⚡ Parallel Workers
                </div>
                <p style="font-size: 0.74rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Executes test suites concurrently across worker threads for maximum speed.
                </p>
              </div>

              <div style="background: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 10px; padding: 0.65rem 0.8rem;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-secondary); margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                  🛡️ Zero Configuration
                </div>
                <p style="font-size: 0.74rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Out-of-the-box runner, assertions, mocks, and code coverage tools.
                </p>
              </div>

              <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 0.65rem 0.8rem;">
                <div style="font-size: 0.8rem; font-weight: 700; color: #10b981; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                  🔬 Isolated Sandboxes
                </div>
                <p style="font-size: 0.74rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Every spec file runs in an isolated environment (<code>jsdom</code> / Node) avoiding state leaks.
                </p>
              </div>

              <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 10px; padding: 0.65rem 0.8rem;">
                <div style="font-size: 0.8rem; font-weight: 700; color: #f59e0b; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                  🧠 Smart Watch Mode
                </div>
                <p style="font-size: 0.74rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Uses Git diffs to selectively run only the tests affected by recent code changes.
                </p>
              </div>
            </div>
          </div>

          <div class="tag-group" style="margin-top: 0.5rem;">
            <span class="tag">Meta / Facebook</span>
            <span class="tag">Zero Config</span>
            <span class="tag">Parallel Execution</span>
            <span class="tag">Built-in Mocks</span>
            <span class="tag">TypeScript Native</span>
            <span class="tag">Code Coverage</span>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.35rem 1.5rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.6rem;"><i class="ph ph-check-circle"></i> ⚡ Key Highlights</div>
            <ul class="styled-list">
              <li><strong>Meta & Open Source:</strong> Originally created by Facebook (Meta) and maintained as a premier open-source project.</li>
              <li><strong>Framework Agnostic:</strong> Works seamlessly with JavaScript and TypeScript applications across different libraries.</li>
              <li><strong>Zero Configuration:</strong> Provides an out-of-the-box approach for common testing scenarios.</li>
              <li><strong>All-in-One Features:</strong> Built-in test runner, assertion utilities, mocking mechanisms, and code coverage tools.</li>
              <li><strong>Widespread Adoption:</strong> Widely used across React, Angular, Node.js, Vue, and enterprise ecosystems.</li>
              <li><strong>Snapshot Testing:</strong> Capture rendered HTML or object trees to detect unintended UI regressions effortlessly.</li>
            </ul>
          </div>

          <div style="margin-top: 1rem; background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 10px; padding: 0.75rem 1rem;">
            <div style="font-size: 0.88rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.25rem;">📌 Why Developers Choose Jest</div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0; line-height: 1.45;">
              Combines fast feedback loops with zero setup friction, making unit testing an effortless part of daily development workflows.
            </p>
          </div>
        </div>
      </div>
    `,
    notes: "Introduce Jest: Explain its origins at Meta, key zero-config features, architectural pillars (parallel workers, sandboxes, smart watch mode), built-in test runner, and snapshot testing."
  },
  {
    id: 3,
    badge: "UNDER THE HOOD",
    title: "Jest Architecture: Under the Hood",
    subtitle: "Visual breakdown of Jest's test runner, worker pool, sandboxing, and execution lifecycle.",
    layout: "full-image-layout",
    content: `
      <div class="glass-card" style="padding: 1.25rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden;">
        <div style="width: 100%; flex: 1; display: flex; align-items: center; justify-content: center; background: white; border-radius: 12px; padding: 0.75rem; border: 1px solid var(--surface-border); overflow: hidden;">
          <img src="./assets/jest-hood.png" alt="Jest Under the Hood Architecture" style="max-width: 100%; max-height: 480px; object-fit: contain; border-radius: 8px; cursor: pointer; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));" />
        </div>
      </div>
    `,
    notes: "Explain Jest under the hood architecture: test runner, worker processes, jsdom sandboxing, and execution lifecycle."
  },
  {
    id: 4,
    badge: "MIGRATION & PERFORMANCE",
    title: "Why Move from Karma to Jest?",
    subtitle: "Architectural comparison, performance gains, and maintenance overhead reduction.",
    layout: "comparison-table-layout",
    content: `
      <div class="glass-card" style="padding: 1.5rem 1.75rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
        <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-muted); margin-bottom: 1.25rem;">
          Moving from Karma to Jest significantly improves test execution speed and reduces maintenance overhead. Karma relies on launching real browsers (such as Chrome), adding startup and communication overhead, while Jest runs tests directly from the command line using Node.js and <code style="color: var(--accent-primary);">jsdom</code>. With built-in parallel test execution and minimal configuration, Jest provides a faster and more streamlined testing experience.
        </p>

        <div class="table-responsive" style="overflow-y: auto; overflow-x: auto; max-height: 380px; flex: 1; border-radius: 12px; border: 1px solid var(--surface-border);">
          <table class="styled-comparison-table" style="width: 100%; border-collapse: separate; border-spacing: 0;">
            <thead style="position: sticky; top: 0; z-index: 10;">
              <tr style="background: rgb(244 244 244 / 32%); backdrop-filter: blur(10px);">
                <th style="padding: 0.75rem 1.1rem; text-align: left; font-family: var(--font-heading); font-size: 1.05rem; color: #ef4444; border-bottom: 2px solid var(--surface-border); width: 50%;">
                  🐢 Karma Architecture
                </th>
                <th style="padding: 0.75rem 1.1rem; text-align: left; font-family: var(--font-heading); font-size: 1.05rem; color: #10b981; border-bottom: 2px solid var(--surface-border); width: 50%;">
                  ⚡ Jest Architecture
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255, 255, 255, 0.02);">
                <td style="padding: 0.75rem 1.1rem; vertical-align: top; border-right: 1px solid var(--surface-border);">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">🌐 Real Browser Launch</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Runs tests inside a real browser such as Chrome, adding startup and communication overhead.</span>
                </td>
                <td style="padding: 0.75rem 1.1rem; vertical-align: top;">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">⚡ Node.js / jsdom</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Runs tests directly in Node.js and uses <code style="color: var(--accent-secondary);">jsdom</code> when browser-like DOM APIs are required.</span>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid var(--surface-border);">
                <td style="padding: 0.75rem 1.1rem; vertical-align: top; border-right: 1px solid var(--surface-border);">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">🐢 Slower Execution</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Browser initialization and communication can increase overall test execution time.</span>
                </td>
                <td style="padding: 0.75rem 1.1rem; vertical-align: top;">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">🚀 Fast & Multi-threaded</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Runs test files in parallel using worker processes for faster feedback.</span>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255, 255, 255, 0.02);">
                <td style="padding: 0.75rem 1.1rem; vertical-align: top; border-right: 1px solid var(--surface-border);">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">💻 Higher CI Resource Usage</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Requires additional CPU, memory, and browser configuration in CI environments.</span>
                </td>
                <td style="padding: 0.75rem 1.1rem; vertical-align: top;">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">📸 Snapshot Testing</strong>
                  <span style="font-size: 0.85rem; color: var(--text-muted);">Captures and compares snapshots to quickly detect unexpected UI or output changes.</span>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid var(--surface-border);">
                <td style="padding: 0.75rem 1.1rem; vertical-align: top; border-right: 1px solid var(--surface-border);">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">⚙️ More Setup & Maintenance</strong>
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Requires browser launchers and additional configuration for the testing environment.</span>
                </td>
                <td style="padding: 0.75rem 1.1rem; vertical-align: top;">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">🧩 Built-in Mocks & Coverage</strong>
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Provides mocking, spying, assertions, and code coverage within the Jest ecosystem.</span>
                </td>
              </tr>
              <tr style="background: rgba(255, 255, 255, 0.02);">
                <td style="padding: 0.75rem 1.1rem; vertical-align: top; border-right: 1px solid var(--surface-border);">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">⚠️ Deprecated Status</strong>
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Deprecated by the Angular core team, encouraging migration to modern test runners.</span>
                </td>
                <td style="padding: 0.75rem 1.1rem; vertical-align: top;">
                  <strong style="color: var(--text-main); display: block; margin-bottom: 0.2rem;">🌟 Strong Community</strong>
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Vibrant open-source ecosystem, active maintenance, and massive industry adoption.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    notes: "Compare Karma vs Jest: Explain startup overhead of Karma browsers vs Jest parallel Node.js/jsdom execution, snapshots, and lower CI resource usage."
  },
  {
    id: 5,
    badge: "KARMA VS JEST ARCHITECTURE",
    title: "Karma vs Jest: Architectural Comparison",
    subtitle: "Visual breakdown of Karma real-browser architecture vs Jest Node.js & jsdom execution model.",
    layout: "full-image-layout",
    content: `
      <div class="glass-card" style="padding: 1.25rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden;">
        <div style="width: 100%; flex: 1; display: flex; align-items: center; justify-content: center; background: white; border-radius: 12px; padding: 0.75rem; border: 1px solid var(--surface-border); overflow: hidden;">
          <img src="./assets/jest-karma-architecture.png" alt="Karma vs Jest Architecture Diagram" style="max-width: 100%; max-height: 480px; object-fit: contain; border-radius: 8px; cursor: pointer; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));" />
        </div>
      </div>
    `,
    notes: "Explain Karma vs Jest architecture diagram: Karma browser launcher and web server pipeline vs Jest Node.js process with jsdom sandboxing."
  },
  {
    id: 6,
    badge: "ANGULAR TESTING EVOLUTION",
    title: "Angular Deprecated Karma: Moving to Modern Test Runners",
    subtitle: "Understanding the shift toward Vitest and API compatibility with Jest",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-icon"><i class="ph ph-trend-up"></i> 🚀 Ecosystem Evolution</div>
            <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-main); margin-bottom: 1rem;">
              Before diving into Jest, it is crucial to recognize where Angular testing is heading. Karma was the traditional approach for Angular, but the ecosystem is moving toward modern, faster runners called <strong>VITEST</strong>.
            </p>

            <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid var(--surface-border); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <h4 style="font-size: 1.05rem; color: var(--accent-secondary); margin: 0; display: flex; align-items: center; gap: 0.4rem;">
                  ⚡ What is Vitest?
                </h4>
                <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: #38bdf8; text-decoration: underline; font-weight: 500;">
                  vitest.dev &rarr;
                </a>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-muted); margin: 0;">
                Vitest is a modern JavaScript/TypeScript test runner built on top of the Vite ecosystem. It focuses on fast execution, modern tooling, and an excellent developer experience.
              </p>
            </div>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.4rem;">
            <span style="font-size: 0.85rem; color: #10b981; font-weight: 600;">
              ✨ Angular Integration: Angular has adopted Vitest as the default test runner from  Angular 21.
            </span>
            <a href="https://angular.dev/guide/testing/migrating-to-vitest" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: #38bdf8; text-decoration: underline; display: inline-flex; align-items: center; gap: 0.3rem; font-weight: 500;">
              🔗 Angular.dev Guide: Migrating to Vitest &rarr;
            </a>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column;">
          <div class="card-icon" style="margin-bottom: 0.5rem;"><i class="ph ph-arrows-left-right"></i> 🧩 Vitest & Jest — API Similarity</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            Jest developers can easily understand Vitest because many of their testing APIs and concepts are intentionally similar.
          </p>

          <div class="table-responsive" style="overflow-y: auto; max-height: 340px; border-radius: 8px; border: 1px solid var(--surface-border);">
            <table class="styled-comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
              <thead style="position: sticky; top: 0; background: rgb(242 242 242 / 63%); backdrop-filter:  blur(8px); z-index: 5;">
                <tr style="border-bottom: 1px solid var(--surface-border);">
                  <th style="padding: 0.5rem 0.8rem; text-align: left; color: var(--accent-primary);">Jest API</th>
                  <th style="padding: 0.5rem 0.8rem; text-align: left; color: var(--accent-secondary);">Vitest Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.45rem 0.8rem;"><code>describe()</code></td><td style="padding: 0.45rem 0.8rem;"><code>describe()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.45rem 0.8rem;"><code>test() / it()</code></td><td style="padding: 0.45rem 0.8rem;"><code>test() / it()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.45rem 0.8rem;"><code>expect()</code></td><td style="padding: 0.45rem 0.8rem;"><code>expect()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.45rem 0.8rem;"><code>beforeEach()</code></td><td style="padding: 0.45rem 0.8rem;"><code>beforeEach()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.45rem 0.8rem;"><code>afterEach()</code></td><td style="padding: 0.45rem 0.8rem;"><code>afterEach()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.45rem 0.8rem; color: #f472b6;"><code>jest.fn()</code></td><td style="padding: 0.45rem 0.8rem; color: #38bdf8;"><code>vi.fn()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.45rem 0.8rem; color: #f472b6;"><code>jest.spyOn()</code></td><td style="padding: 0.45rem 0.8rem; color: #38bdf8;"><code>vi.spyOn()</code></td></tr>
                <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.45rem 0.8rem; color: #f472b6;"><code>jest.mock()</code></td><td style="padding: 0.45rem 0.8rem; color: #38bdf8;"><code>vi.mock()</code></td></tr>
                <tr><td style="padding: 0.45rem 0.8rem;">Jest snapshots</td><td style="padding: 0.45rem 0.8rem;">Vitest snapshots</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    notes: "Discuss Angular's deprecation of Karma and the shift to Vitest, highlighting how learning Jest provides near 1:1 API mapping with Vitest."
  },
  {
    id: 7,
    badge: "SETUP & CONFIGURATION",
    title: "Installation & Setup Guide",
    subtitle: "Configuring Jest, Angular Testing Library, setup-jest.ts, and TypeScript spec options",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem 1.4rem;">
          <div style="margin-bottom: 0.75rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); letter-spacing: 1px; margin-bottom: 0.2rem;">STEP 1</div>
            <h4 style="font-size: 0.98rem; margin-bottom: 0.4rem; color: var(--text-main);">Install Jest & Testing Library Dependencies</h4>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; margin-bottom: 0.45rem; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary);">
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.2rem;"># Install Jest Core & Angular Preset</div>
              <pre style="margin: 0; font-size: 0.74rem; font-family: monospace; white-space: pre-wrap; color: var(--accent-primary); font-weight: 600;">npm install --save-dev jest jest-preset-angular @types/jest jest-environment-jsdom</pre>
            </div>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary);">
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.2rem;"># Install Angular Testing Library</div>
              <pre style="margin: 0; font-size: 0.74rem; font-family: monospace; white-space: pre-wrap; color: var(--accent-primary); font-weight: 600;">npm install --save-dev @testing-library/angular @testing-library/dom @testing-library/user-event</pre>
            </div>
          </div>

          <div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-secondary); letter-spacing: 1px; margin-bottom: 0.2rem;">STEP 2</div>
            <h4 style="font-size: 0.98rem; margin-bottom: 0.4rem; color: var(--text-main);">Create Jest Setup File (<code style="color: var(--accent-secondary);">setup-jest.ts</code>)</h4>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary);">
              <pre style="margin: 0; font-size: 0.72rem; font-family: monospace; color: var(--text-main); line-height: 1.4;">import '<span style="color: var(--accent-secondary);">zone.js</span>';
import '<span style="color: var(--accent-secondary);">zone.js/testing</span>';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);</pre>
            </div>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem 1.4rem;">
          <div style="margin-bottom: 0.75rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #10b981; letter-spacing: 1px; margin-bottom: 0.2rem;">STEP 3</div>
            <h4 style="font-size: 0.98rem; margin-bottom: 0.4rem; color: var(--text-main);">Create Jest Config (<code style="color: #10b981;">jest.config.js</code>)</h4>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid #10b981;">
              <pre style="margin: 0; font-size: 0.71rem; font-family: monospace; color: var(--text-main); line-height: 1.35;">/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: '<span style="color: #10b981;">jest-preset-angular</span>',
  setupFilesAfterEnv: ['&lt;rootDir&gt;/setup-jest.ts'],
  testMatch: ['&lt;rootDir&gt;/**/*.spec.ts'],
  testPathIgnorePatterns: ['&lt;rootDir&gt;/node_modules/', '&lt;rootDir&gt;/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
};</pre>
            </div>
          </div>

          <div>
            <div style="font-size: 0.75rem; font-weight: 700; color: #f59e0b; letter-spacing: 1px; margin-bottom: 0.2rem;">STEP 4</div>
            <h4 style="font-size: 0.98rem; margin-bottom: 0.4rem; color: var(--text-main);">Update TS Spec Config (<code style="color: #f59e0b;">tsconfig.spec.json</code>)</h4>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid #f59e0b;">
              <pre style="margin: 0; font-size: 0.72rem; font-family: monospace; color: var(--text-main); line-height: 1.4;">{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["<span style="color: #f59e0b;">jest</span>"]
  },
  "include": ["src/**/*.spec.ts", "setup-jest.ts"]
}</pre>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Walk through the 4 setup steps for Angular Jest integration: dependency installation, setup-jest.ts zone initialization, jest.config.js configuration, and tsconfig.spec.json types update."
  },
  {
    id: 8,
    badge: "ANGULAR TESTING CORE",
    title: "Angular Testing Fundamentals",
    subtitle: "The Core Building Blocks & Execution Flow",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem 1.4rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-blocks"></i> 🧱 Building Blocks</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.6rem;">
              Angular unit testing relies on key APIs to configure environment, instantiate components, trigger change detection, and verify expectations.
            </p>

            <div class="table-responsive" style="overflow-y: auto; max-height: 270px; border-radius: 8px; border: 1px solid var(--surface-border);">
              <table class="styled-comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.82rem;">
                <thead style="position: sticky; top: 0; background: rgb(242 242 242 / 63%); backdrop-filter:  blur(8px); z-index: 5;">
                  <tr style="border-bottom: 1px solid var(--surface-border);">
                    <th style="padding: 0.45rem 0.75rem; text-align: left; color: var(--accent-primary); width: 35%;">Building Block</th>
                    <th style="padding: 0.45rem 0.75rem; text-align: left; color: var(--text-main);">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #38bdf8;">🧪 TestBed</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Creates & configures the Angular testing environment (components, providers, DI).</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #f472b6;">🧩 ComponentFixture</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Wrapper around component instance and its rendered DOM tree.</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #10b981;">🔄 detectChanges()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Triggers Angular change detection for bindings, hooks & template updates.</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #a78bfa;">📝 describe()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Groups related test cases into a logical test suite.</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #34d399;">✅ it() / test()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Defines an individual test case and describes expected behavior.</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #fbbf24;">⚙️ beforeEach()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Runs setup logic before each test to keep tests isolated.</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.4rem 0.75rem;"><code style="color: #f87171;">🧹 afterEach()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Runs cleanup/teardown logic after each test execution.</td></tr>
                  <tr><td style="padding: 0.4rem 0.75rem;"><code style="color: #c084fc;">🎯 expect()</code></td><td style="padding: 0.4rem 0.75rem; color: var(--text-muted);">Creates assertions to verify actual vs expected test results.</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style="margin-top: 0.6rem; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 0.55rem 0.8rem;">
            <div style="font-size: 0.78rem; color: #f59e0b; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
              💡 Important Note
            </div>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.2rem 0 0 0; line-height: 1.35;">
              For basic instance checks, <code>fixture.detectChanges()</code> isn't strictly required. It becomes vital when testing template DOM rendering, bindings, lifecycle hooks, or UI events.
            </p>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem 1.4rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.6rem;"><i class="ph ph-flow-arrow"></i> ⚙️ How These Pieces Work Together</div>
            
            <div class="flow-steps-container" style="display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.8rem;">
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-primary); border-radius: 8px; padding: 0.4rem 0.7rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary);">1. TestBed</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Creates Testing Environment</span>
              </div>
              <div style="text-align: center; font-size: 0.75rem; color: var(--accent-secondary); line-height: 1;">↓ createComponent()</div>
              
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-secondary); border-radius: 8px; padding: 0.4rem 0.7rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-secondary);">2. ComponentFixture</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Component Instance + DOM</span>
              </div>
              <div style="text-align: center; font-size: 0.75rem; color: #10b981; line-height: 1;">↓ detectChanges()</div>

              <div style="background: var(--surface-glass); border: 1px solid #10b981; border-radius: 8px; padding: 0.4rem 0.7rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #10b981;">3. detectChanges()</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Angular Processes Changes</span>
              </div>
              <div style="text-align: center; font-size: 0.75rem; color: #c084fc; line-height: 1;">↓ expect()</div>

              <div style="background: var(--surface-glass); border: 1px solid #c084fc; border-radius: 8px; padding: 0.4rem 0.7rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #c084fc;">4. Assertions</span>
                <span style="font-size: 0.78rem; font-weight: 700; color: #10b981;">✓ PASS / ✕ FAIL</span>
              </div>
            </div>
          </div>

          <div style="background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--surface-border); border-radius: 10px; padding: 0.7rem 0.9rem;">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">📌 Key Concept Summary</div>
            <p style="font-size: 0.76rem; color: var(--text-muted); margin: 0; line-height: 1.45;">
              <strong style="color: var(--accent-primary);">TestBed</strong> creates environment &rarr; <strong style="color: var(--accent-secondary);">Fixture</strong> gives access &rarr; <strong style="color: #10b981;">detectChanges()</strong> runs Angular &rarr; <strong style="color: #c084fc;">expect()</strong> verifies result.
            </p>
          </div>
        </div>
      </div>
    `,
    notes: "Explain Angular Testing fundamentals: TestBed environment creation, ComponentFixture DOM wrapper, detectChanges lifecycle processing, and expect assertion verification."
  },
  {
    id: 9,
    badge: "ASSERTIONS & SYNTAX",
    title: "Jest Matchers & Test Syntax",
    subtitle: "Matchers Cheat Sheet, Jasmine vs Jest Parity & Mocking Introduction",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem;"><i class="ph ph-check-square-offset"></i> 📑 Jest Matchers Cheat Sheet</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">
              Matchers are building blocks used with <code>expect()</code> to assert test expectations.
            </p>

            <div class="table-responsive" style="overflow-y: auto; max-height: 380px; border-radius: 8px; border: 1px solid var(--surface-border);">
              <table class="styled-comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                <thead style="position: sticky; top: 0; background: rgb(242 242 242 / 63%); backdrop-filter:  blur(8px); z-index: 5;">
                  <tr style="border-bottom: 1px solid var(--surface-border);">
                    <th style="padding: 0.4rem 0.6rem; text-align: left; color: var(--accent-primary);">Jest Matcher</th>
                    <th style="padding: 0.4rem 0.6rem; text-align: left; color: var(--text-main);">Example Syntax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #38bdf8;">toBeTruthy()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(component).toBeTruthy()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #f472b6;">toBeFalsy()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(value).toBeFalsy()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #10b981;">toBe()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(count).toBe(10)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #a78bfa;">toEqual()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(user).toEqual(mockUser)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #fbbf24;">toContain()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(users).toContain(user)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #94a3b8;">toBeNull()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(val).toBeNull()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #94a3b8;">toBeUndefined()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(val).toBeUndefined()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #38bdf8;">toBeDefined()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(val).toBeDefined()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #f59e0b;">toBeGreaterThan()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(c).toBeGreaterThan(0)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #ec4899;">toMatch()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(name).toMatch(/John/)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #34d399;">toHaveBeenCalled()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(fn).toHaveBeenCalled()</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #34d399;">toHaveBeenCalledWith()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(fn).toHaveBeenCalledWith(10)</code></td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.35rem 0.6rem;"><code style="color: #34d399;">toHaveBeenCalledTimes()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(fn).toHaveBeenCalledTimes(1)</code></td></tr>
                  <tr><td style="padding: 0.35rem 0.6rem;"><code style="color: #c084fc;">toMatchSnapshot()</code></td><td style="padding: 0.35rem 0.6rem; color: var(--text-muted);"><code>expect(val).toMatchSnapshot()</code></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-git-diff"></i> 🔄 Jasmine vs Jest — What Changes?</div>

            <div class="table-responsive" style="overflow-y: auto; max-height: 180px; border-radius: 8px; border: 1px solid var(--surface-border); margin-bottom: 0.75rem;">
              <table class="styled-comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.78rem;">
                <thead style="position: sticky; top: 0; background: rgb(242 242 242 / 63%); backdrop-filter:  blur(8px); z-index: 5;">
                  <tr style="border-bottom: 1px solid var(--surface-border);">
                    <th style="padding: 0.35rem 0.6rem; text-align: left; color: #f472b6;">Jasmine</th>
                    <th style="padding: 0.35rem 0.6rem; text-align: left; color: #38bdf8;">Jest</th>
                    <th style="padding: 0.35rem 0.6rem; text-align: left; color: var(--text-main);">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.3rem 0.6rem;"><code>toBeTruthy()</code></td><td style="padding: 0.3rem 0.6rem;"><code>toBeTruthy()</code></td><td style="padding: 0.3rem 0.6rem; color: #10b981;">✅ Same</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.3rem 0.6rem;"><code>toEqual()</code></td><td style="padding: 0.3rem 0.6rem;"><code>toEqual()</code></td><td style="padding: 0.3rem 0.6rem; color: #10b981;">✅ Same</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.3rem 0.6rem;"><code>toBe()</code></td><td style="padding: 0.3rem 0.6rem;"><code>toBe()</code></td><td style="padding: 0.3rem 0.6rem; color: #10b981;">✅ Same</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.3rem 0.6rem;"><code>toHaveBeenCalledWith()</code></td><td style="padding: 0.3rem 0.6rem;"><code>toHaveBeenCalledWith()</code></td><td style="padding: 0.3rem 0.6rem; color: #10b981;">✅ Same</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.3rem 0.6rem;"><code>jasmine.createSpy()</code></td><td style="padding: 0.3rem 0.6rem;"><code>jest.fn()</code></td><td style="padding: 0.3rem 0.6rem; color: #38bdf8;">🔄 Different API</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.3rem 0.6rem;"><code>spyOn(obj, 'method')</code></td><td style="padding: 0.3rem 0.6rem;"><code>jest.spyOn(obj, 'method')</code></td><td style="padding: 0.3rem 0.6rem; color: #38bdf8;">🔄 Similar API</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border);"><td style="padding: 0.3rem 0.6rem;"><code>jasmine.createSpyObj()</code></td><td style="padding: 0.3rem 0.6rem;"><code>jest.fn() / object of mocks</code></td><td style="padding: 0.3rem 0.6rem; color: #f59e0b;">🔄 Different approach</td></tr>
                  <tr style="border-bottom: 1px solid var(--surface-border); background: rgba(255,255,255,0.02);"><td style="padding: 0.3rem 0.6rem;">—</td><td style="padding: 0.3rem 0.6rem;"><code>toMatchSnapshot()</code></td><td style="padding: 0.3rem 0.6rem; color: #a78bfa;">⭐ Jest feature</td></tr>
                  <tr><td style="padding: 0.3rem 0.6rem;">—</td><td style="padding: 0.3rem 0.6rem;"><code>toHaveBeenCalledTimes()</code></td><td style="padding: 0.3rem 0.6rem; color: #a78bfa;">⭐ Jest matcher</td></tr>
                </tbody>
              </table>
            </div>

            <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 8px; padding: 0.6rem 0.8rem; margin-bottom: 0.6rem;">
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.3rem;">🎭 Jest Mocking Basics</div>
              <pre style="margin: 0; font-size: 0.72rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: var(--text-muted);">// Creating Standalone Mock & Spying</span>
<span style="color: #f472b6;">const</span> mockFn = <span style="color: #38bdf8;">jest.fn()</span>;
<span style="color: #38bdf8;">jest.spyOn</span>(service, <span style="color: #10b981;">'getUsers'</span>);

<span style="color: var(--text-muted);">// Verification</span>
<span style="color: #a78bfa;">expect</span>(service.getUsers).<span style="color: #34d399;">toHaveBeenCalled()</span>;</pre>
            </div>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.5rem 0.75rem;">
            <div style="font-size: 0.75rem; color: #10b981; font-weight: 700; margin-bottom: 0.15rem;">
              🛡️ Why Mock?
            </div>
            <p style="font-size: 0.72rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Mocking isolates the unit under test by replacing real API calls (<code>UserService ➔ ❌ Real API</code>) with controlled test doubles (<code>Mock UserService ➔ ✅ Controlled Data</code>).
            </p>
          </div>
        </div>
      </div>
    `,
    notes: "Review Jest matchers cheat sheet, contrast Jasmine vs Jest syntax, and introduce Jest mocking fundamentals with jest.fn() and jest.spyOn()."
  },
  {
    id: 10,
    badge: "COMPONENT TESTING",
    title: "Component Testing: Behavior to UI",
    subtitle: "Verifying Signal state updates, user events, and rendered DOM output",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem;"><i class="ph ph-cube"></i> 🧩 CounterComponent (Signal State)</div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
              Standalone component with a Signal count state and template DOM bindings.
            </p>

            <div class="glass-card" style="padding: 0.6rem 0.8rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary); margin-bottom: 0.6rem;">
              <div style="font-size: 0.7rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.3rem;">counter.component.ts</div>
              <pre style="margin: 0; font-size: 0.71rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: #f472b6;">import</span> { Component, signal } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;

<span style="color: #38bdf8;">@Component</span>({
  selector: <span style="color: #10b981;">'app-counter'</span>,
  standalone: <span style="color: #f59e0b;">true</span>,
  template: <span style="color: #10b981;">\`
    &lt;p data-testid="count"&gt;Count: {{ count() }}&lt;/p&gt;
    &lt;button (click)="increment()"&gt;Increment&lt;/button&gt;
    &lt;button (click)="reset()"&gt;Reset&lt;/button&gt;
  \`</span>
})
<span style="color: #f472b6;">export class</span> <span style="color: #38bdf8;">CounterComponent</span> {
  count = <span style="color: #38bdf8;">signal</span>(0);

  <span style="color: #a78bfa;">increment</span>() { <span style="color: #f472b6;">this</span>.count.<span style="color: #34d399;">update</span>(v =&gt; v + 1); }
  <span style="color: #a78bfa;">reset</span>() { <span style="color: #f472b6;">this</span>.count.<span style="color: #34d399;">set</span>(0); }
}</pre>
            </div>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.55rem 0.75rem;">
            <div style="font-size: 0.76rem; color: #10b981; font-weight: 700; margin-bottom: 0.15rem;">
              🎯 Key Takeaway
            </div>
            <p style="font-size: 0.72rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Good component tests verify behavior from the user's perspective (UI rendering & interaction) — not just executing class methods.
            </p>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem;"><i class="ph ph-code"></i> 🧪 CounterComponent Spec (Jest Test)</div>

            <div class="glass-card" style="padding: 0.6rem 0.8rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); margin-bottom: 0.6rem; overflow-y: auto; max-height: 350px;">
              <div style="font-size: 0.7rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.3rem;">counter.component.spec.ts</div>
              <pre style="margin: 0; font-size: 0.68rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: #f472b6;">import</span> { ComponentFixture, TestBed } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core/testing'</span>;
<span style="color: #f472b6;">import</span> { By } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/platform-browser'</span>;
<span style="color: #f472b6;">import</span> { CounterComponent } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./counter.component'</span>;

<span style="color: #f472b6;">describe</span>(<span style="color: #10b981;">'CounterComponent'</span>, () =&gt; {
  <span style="color: #f472b6;">let</span> fixture: ComponentFixture&lt;CounterComponent&gt;;
  <span style="color: #f472b6;">let</span> component: CounterComponent;

  <span style="color: #f472b6;">beforeEach</span>(<span style="color: #f59e0b;">async</span> () =&gt; {
    <span style="color: #f59e0b;">await</span> TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should start at 0'</span>, () =&gt; {
    <span style="color: #f472b6;">const</span> el = fixture.debugElement.query(By.css(<span style="color: #10b981;">'[data-testid="count"]'</span>));
    <span style="color: #a78bfa;">expect</span>(el.nativeElement.textContent).<span style="color: #34d399;">toContain</span>(<span style="color: #10b981;">'Count: 0'</span>);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should increment on button click'</span>, () =&gt; {
    <span style="color: #f472b6;">const</span> button = fixture.debugElement.queryAll(By.css(<span style="color: #10b981;">'button'</span>))[0];
    button.triggerEventHandler(<span style="color: #10b981;">'click'</span>, <span style="color: #f59e0b;">null</span>);
    fixture.detectChanges();
    <span style="color: #a78bfa;">expect</span>(fixture.nativeElement.textContent).<span style="color: #34d399;">toContain</span>(<span style="color: #10b981;">'Count: 1'</span>);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should reset count'</span>, () =&gt; {
    component.increment(); component.increment();
    component.reset();
    <span style="color: #a78bfa;">expect</span>(component.count()).<span style="color: #34d399;">toBe</span>(0);
  });
});</pre>
            </div>
          </div>

          <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 8px; padding: 0.5rem 0.75rem;">
            <div style="font-size: 0.73rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.3rem;">🔄 Component Testing Flow</div>
            <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.68rem; color: var(--text-muted); font-weight: 600;">
              <span>Create</span> &rarr;
              <span>TestBed</span> &rarr;
              <span>Fixture</span> &rarr;
              <span>Trigger Event</span> &rarr;
              <span>detectChanges()</span> &rarr;
              <span style="color: #10b981; font-weight: 700;">✓ PASS</span>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Walk through complete component testing example: standalone component signal state, fixture initialization, button event triggers, change detection, and DOM assertions."
  },
  {
    id: 11,
    badge: "MODERN TESTING WITH SIGNALS",
    title: "Modern Testing with Signals: State, Computeds & Effects",
    subtitle: "Testing standalone signals, computed reactivity, and side-effects using TestBed.runInInjectionContext & TestBed.tick()",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem;"><i class="ph ph-lightning"></i> ⚡ Signal Testing Fundamentals</div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.6rem;">
              Testing Angular Signals involves verifying primitive writable signals, derived computed reactivity, and asynchronous effects.
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 0.6rem;">
              <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 0.45rem 0.65rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.15rem;">1. Writable Signals (<code>signal</code>)</div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Read via getter <code>val()</code>, mutate via <code>.set(newVal)</code> or <code>.update(fn)</code> directly in test cases.</p>
              </div>

              <div style="background: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 8px; padding: 0.45rem 0.65rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: var(--accent-secondary); margin-bottom: 0.15rem;">2. Computed Signals (<code>computed</code>)</div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Read-only derived signals that automatically recalculate when dependent signals change.</p>
              </div>

              <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.45rem 0.65rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: #10b981; margin-bottom: 0.15rem;">3. Signal Effects (<code>effect</code>)</div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Execute in injection context via <code>TestBed.runInInjectionContext()</code> and flush via <code>TestBed.tick()</code>.</p>
              </div>
            </div>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.55rem 0.75rem;">
            <div style="font-size: 0.76rem; color: #10b981; font-weight: 700; margin-bottom: 0.15rem;">
              🎯 Key Takeaway
            </div>
            <p style="font-size: 0.72rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Testing Signals requires no complex RxJS subscription management. Use direct getters, set/update methods, and <code>TestBed.tick()</code> for effects.
            </p>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem;"><i class="ph ph-code"></i> 🧪 Direct Signal & Effect Test Suite Spec</div>

            <div class="glass-card" style="padding: 0.6rem 0.8rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); margin-bottom: 0.6rem; overflow-y: auto; max-height: 350px;">
              <div style="font-size: 0.7rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.3rem;">signal-api.spec.ts</div>
              <pre style="margin: 0; font-size: 0.65rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: #f472b6;">import</span> { signal, computed, effect } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;
<span style="color: #f472b6;">import</span> { TestBed } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core/testing'</span>;

<span style="color: #f472b6;">describe</span>(<span style="color: #10b981;">'Direct Signal API & Effect Testing'</span>, () =&gt; {
  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should test standalone signal set, update, and read inside testcase'</span>, () =&gt; {
    <span style="color: #f472b6;">const</span> count = <span style="color: #38bdf8;">signal</span>(0);
    <span style="color: #a78bfa;">expect</span>(count()).<span style="color: #34d399;">toBe</span>(0);

    count.<span style="color: #34d399;">set</span>(10);
    <span style="color: #a78bfa;">expect</span>(count()).<span style="color: #34d399;">toBe</span>(10);

    count.<span style="color: #34d399;">update</span>(val =&gt; val + 5);
    <span style="color: #a78bfa;">expect</span>(count()).<span style="color: #34d399;">toBe</span>(15);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should test computed signal reactivity inside testcase'</span>, () =&gt; {
    <span style="color: #f472b6;">const</span> quantity = <span style="color: #38bdf8;">signal</span>(2);
    <span style="color: #f472b6;">const</span> price = <span style="color: #38bdf8;">signal</span>(50);
    <span style="color: #f472b6;">const</span> total = <span style="color: #38bdf8;">computed</span>(() =&gt; quantity() * price());

    <span style="color: #a78bfa;">expect</span>(total()).<span style="color: #34d399;">toBe</span>(100);

    quantity.<span style="color: #34d399;">set</span>(4);
    <span style="color: #a78bfa;">expect</span>(total()).<span style="color: #34d399;">toBe</span>(200);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should test signal effect execution with TestBed.tick() inside testcase'</span>, () =&gt; {
    <span style="color: #f472b6;">let</span> sideEffectLog = <span style="color: #10b981;">''</span>;

    TestBed.<span style="color: #38bdf8;">runInInjectionContext</span>(() =&gt; {
      <span style="color: #f472b6;">const</span> username = <span style="color: #38bdf8;">signal</span>(<span style="color: #10b981;">'Alice'</span>);

      <span style="color: #38bdf8;">effect</span>(() =&gt; {
        sideEffectLog = \`User: \${username()}\`;
      });

      TestBed.<span style="color: #34d399;">tick</span>();
      <span style="color: #a78bfa;">expect</span>(sideEffectLog).<span style="color: #34d399;">toBe</span>(<span style="color: #10b981;">'User: Alice'</span>);

      username.<span style="color: #34d399;">set</span>(<span style="color: #10b981;">'Bob'</span>);
      TestBed.<span style="color: #34d399;">tick</span>();
      <span style="color: #a78bfa;">expect</span>(sideEffectLog).<span style="color: #34d399;">toBe</span>(<span style="color: #10b981;">'User: Bob'</span>);
    });
  });
});</pre>
            </div>
          </div>

          <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 8px; padding: 0.5rem 0.75rem;">
            <div style="font-size: 0.73rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.3rem;">🔄 Signal Test Execution Lifecycle</div>
            <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.68rem; color: var(--text-muted); font-weight: 600;">
              <span>signal() / set()</span> &rarr;
              <span>computed()</span> &rarr;
              <span>runInInjectionContext()</span> &rarr;
              <span>TestBed.tick()</span> &rarr;
              <span style="color: #10b981; font-weight: 700;">✓ PASS</span>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Walk through component testing using Signals directly in test cases: reading signal getters, setting signal state directly in tests, change detection, computed signal evaluation, and DOM assertions."
  },
  {
    id: 12,
    badge: "SERVICE TESTING & HTTP MOCKING",
    title: "Testing Services: HttpClient Mocking",
    subtitle: "Unit testing Angular Services using HttpTestingController and Mock Data Responses",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-wrench"></i> 🛠️ UserService Implementation</div>
            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary); overflow-y: auto; max-height: 380px;">
              <div style="font-size: 0.7rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.3rem;">user.service.ts</div>
              <pre style="margin: 0; font-size: 0.62rem; font-family: monospace; color: var(--text-main); line-height: 1.36;"><span style="color: #f472b6;">import</span> { Injectable, inject } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;
<span style="color: #f472b6;">import</span> { HttpClient } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/common/http'</span>;
<span style="color: #f472b6;">import</span> { Observable } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'rxjs'</span>;
<span style="color: #f472b6;">import</span> { map } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'rxjs/operators'</span>;
<span style="color: #f472b6;">import</span> { User, CreateUserDto } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./user.model'</span>;

<span style="color: #38bdf8;">@Injectable</span>({ providedIn: <span style="color: #10b981;">'root'</span> })
<span style="color: #f472b6;">export class</span> <span style="color: #38bdf8;">UserService</span> {
  <span style="color: #f472b6;">private</span> http = <span style="color: #38bdf8;">inject</span>(HttpClient);
  <span style="color: #f472b6;">private</span> apiUrl = <span style="color: #10b981;">'https://jsonplaceholder.typicode.com/users'</span>;

  <span style="color: #a78bfa;">getUsers</span>(): Observable&lt;User[]&gt; {
    <span style="color: #f472b6;">return this</span>.http.get&lt;<span style="color: #38bdf8;">any[]</span>&gt;(<span style="color: #f472b6;">this</span>.apiUrl).pipe(
      map(users =&gt; users.map(u =&gt; ({
        ...u,
        role: u.role || <span style="color: #10b981;">'User'</span>,
        status: u.status || <span style="color: #10b981;">'active'</span>
      })))
    );
  }

  <span style="color: #a78bfa;">getUserById</span>(id: number): Observable&lt;User&gt; {
    <span style="color: #f472b6;">return this</span>.http.get&lt;<span style="color: #38bdf8;">any</span>&gt;(\`\${<span style="color: #f472b6;">this</span>.apiUrl}/\${id}\`).pipe(
      map(u =&gt; ({
        ...u,
        role: u.role || <span style="color: #10b981;">'User'</span>,
        status: u.status || <span style="color: #10b981;">'active'</span>
      }))
    );
  }

  <span style="color: #a78bfa;">createUser</span>(user: CreateUserDto): Observable&lt;User&gt; {
    <span style="color: #f472b6;">const</span> newUser: CreateUserDto = {
      ...user,
      status: user.status || <span style="color: #10b981;">'active'</span>
    };
    <span style="color: #f472b6;">return this</span>.http.post&lt;User&gt;(<span style="color: #f472b6;">this</span>.apiUrl, newUser);
  }

  <span style="color: #a78bfa;">deleteUser</span>(id: number): Observable&lt;void&gt; {
    <span style="color: #f472b6;">return this</span>.http.delete&lt;void&gt;(\`\${<span style="color: #f472b6;">this</span>.apiUrl}/\${id}\`);
  }
}</pre>
            </div>
          </div>
        </div>

        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-test-tube"></i> 🧪 UserService Spec (HttpTestingController)</div>
            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); overflow-y: auto; max-height: 380px;">
              <div style="font-size: 0.7rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.3rem;">user.service.spec.ts</div>
              <pre style="margin: 0; font-size: 0.62rem; font-family: monospace; color: var(--text-main); line-height: 1.36;"><span style="color: #f472b6;">import</span> { TestBed } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core/testing'</span>;
<span style="color: #f472b6;">import</span> { HttpTestingController, provideHttpClientTesting } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/common/http/testing'</span>;
<span style="color: #f472b6;">import</span> { UserService } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./user.service'</span>;
<span style="color: #f472b6;">import</span> { mockUsers } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./user.mock'</span>;

<span style="color: #f472b6;">describe</span>(<span style="color: #10b981;">'UserService (HTTP Testing)'</span>, () =&gt; {
  <span style="color: #f472b6;">let</span> service: UserService;
  <span style="color: #f472b6;">let</span> httpMock: HttpTestingController;

  <span style="color: #f472b6;">beforeEach</span>(() =&gt; {
    TestBed.configureTestingModule({
      providers: [UserService, <span style="color: #38bdf8;">provideHttpClientTesting()</span>],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  <span style="color: #f472b6;">afterEach</span>(() =&gt; { <span style="color: #f87171;">httpMock.verify();</span> });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should fetch list of users via GET request'</span>, () =&gt; {
    service.getUsers().subscribe(users =&gt; {
      <span style="color: #a78bfa;">expect</span>(users.length).<span style="color: #34d399;">toBe</span>(2);
      <span style="color: #a78bfa;">expect</span>(users).<span style="color: #34d399;">toEqual</span>(mockUsers);
    });

    <span style="color: #f472b6;">const</span> req = httpMock.<span style="color: #38bdf8;">expectOne</span>(<span style="color: #10b981;">'https://jsonplaceholder.typicode.com/users'</span>);
    <span style="color: #a78bfa;">expect</span>(req.request.method).<span style="color: #34d399;">toBe</span>(<span style="color: #10b981;">'GET'</span>);
    req.<span style="color: #10b981;">flush</span>(mockUsers);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should fetch user by ID via GET request'</span>, () =&gt; {
    service.getUserById(1).subscribe(user =&gt; {
      <span style="color: #a78bfa;">expect</span>(user).<span style="color: #34d399;">toEqual</span>(mockUsers[0]);
    });
    <span style="color: #f472b6;">const</span> req = httpMock.<span style="color: #38bdf8;">expectOne</span>(<span style="color: #10b981;">'https://jsonplaceholder.typicode.com/users/1'</span>);
    req.<span style="color: #10b981;">flush</span>(mockUsers[0]);
  });
});</pre>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Demonstrate Angular HTTP Service unit testing code with UserService and UserService Spec."
  },
  {
    id: 13,
    badge: "SERVICE TESTING EXPLANATION",
    title: "HttpClient Mocking: Key Concepts",
    subtitle: "Understanding HttpTestingController Mechanisms & Test Execution Flow",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <!-- Left Column: In-Memory HTTP Mock Architecture Image & Description -->
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.5rem;"><i class="ph ph-globe-hemisphere-west"></i> 🌐 In-Memory HTTP Mock Architecture</div>
            <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 10px; padding: 0.6rem; text-align: center; margin-bottom: 0.8rem;">
              <img src="./assets/mock-http.png" alt="HTTP Mocking Architecture Diagram" style="width: 100%; object-fit: contain; border-radius: 6px;" />
            </div>
          </div>

          <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.6rem 0.8rem;">
            <div style="font-size: 0.76rem; color: #38bdf8; font-weight: 700; margin-bottom: 0.2rem;">💡 How Network Interception Works</div>
            <p style="font-size: 0.72rem; color: var(--text-muted); margin: 0; line-height: 1.38;">
              Angular's <code>HttpTestingController</code> intercepts outgoing HTTP requests before reaching the browser's XHR/Fetch network pipeline, giving unit tests total control over response payloads and status codes.
            </p>
          </div>
        </div>

        <!-- Right Column: Core Mechanism Breakdown & Execution Sequence Stacked -->
        <div style="display: flex; flex-direction: column; gap: 0.9rem;">
          <!-- Top Stacked Card: Core Mechanism Breakdown -->
          <div class="glass-card" style="padding: 0.95rem 1.15rem;">
            <div class="card-icon" style="margin-bottom: 0.4rem; font-size: 0.85rem;"><i class="ph ph-lightning"></i> ⚡ Core Mechanism Breakdown</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem;">
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-primary); border-radius: 6px; padding: 0.4rem 0.6rem;">
                <div style="font-size: 0.7rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.1rem;">1. provideHttpClientTesting()</div>
                <p style="font-size: 0.66rem; color: var(--text-muted); margin: 0; line-height: 1.25;">Replaces XHR network with in-memory testing controller.</p>
              </div>

              <div style="background: var(--surface-glass); border: 1px solid var(--accent-secondary); border-radius: 6px; padding: 0.4rem 0.6rem;">
                <div style="font-size: 0.7rem; font-weight: 700; color: var(--accent-secondary); margin-bottom: 0.1rem;">2. expectOne(url)</div>
                <p style="font-size: 0.66rem; color: var(--text-muted); margin: 0; line-height: 1.25;">Asserts exactly 1 matching HTTP request occurred.</p>
              </div>

              <div style="background: var(--surface-glass); border: 1px solid #10b981; border-radius: 6px; padding: 0.4rem 0.6rem;">
                <div style="font-size: 0.7rem; font-weight: 700; color: #10b981; margin-bottom: 0.1rem;">3. req.flush(mockData)</div>
                <p style="font-size: 0.66rem; color: var(--text-muted); margin: 0; line-height: 1.25;">Injects mock data payload into Observable stream.</p>
              </div>

              <div style="background: var(--surface-glass); border: 1px solid #f87171; border-radius: 6px; padding: 0.4rem 0.6rem;">
                <div style="font-size: 0.7rem; font-weight: 700; color: #f87171; margin-bottom: 0.1rem;">4. httpMock.verify()</div>
                <p style="font-size: 0.66rem; color: var(--text-muted); margin: 0; line-height: 1.25;">Guarantees zero unhandled or dangling HTTP calls.</p>
              </div>
            </div>
          </div>

          <!-- Bottom Stacked Card: HTTP Test Execution Sequence & Rule -->
          <div class="glass-card" style="padding: 0.95rem 1.15rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="card-icon" style="margin-bottom: 0.4rem; font-size: 0.85rem;"><i class="ph ph-arrows-clockwise"></i> 🔄 HTTP Test Execution Sequence</div>
              <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.6rem;">
                <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 6px; padding: 0.3rem 0.55rem; font-size: 0.75rem;">
                  <span style="font-weight: 700; color: var(--accent-primary);">Step A:</span> <code>service.getUsers()</code> &rarr; Pending Observable
                </div>
                <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 6px; padding: 0.3rem 0.55rem; font-size: 0.75rem;">
                  <span style="font-weight: 700; color: var(--accent-secondary);">Step B:</span> <code>httpMock.expectOne(URL)</code> &rarr; Intercept request
                </div>
                <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 6px; padding: 0.3rem 0.55rem; font-size: 0.75rem;">
                  <span style="font-weight: 700; color: #10b981;">Step C:</span> <code>req.flush(mockData)</code> &rarr; Emit mock response
                </div>
                <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 6px; padding: 0.3rem 0.55rem; font-size: 0.75rem;">
                  <span style="font-weight: 700; color: #a78bfa;">Step D:</span> <code>expect(users).toEqual(mockData)</code> &rarr; Assert transformation
                </div>
              </div>
            </div>

            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 6px; padding: 0.35rem 0.75rem;">
              <div style="font-size: 0.71rem; color: #f59e0b; font-weight: 700; margin-bottom: 0.05rem;">💡 Best Practice Rule</div>
              <p style="font-size: 0.66rem; color: var(--text-muted); margin: 0; line-height: 1.25;">
                Always call <code>req.flush()</code> <em>after</em> setting up <code>expectOne()</code>, and run <code>httpMock.verify()</code> in <code>afterEach()</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Explain the HTTP testing mechanisms with architecture image on left and mechanism breakdown + execution sequence stacked on right."
  },
  {
    id: 14,
    badge: "REAL HTTP TESTING",
    title: "Testing Services with Real HTTP Calls",
    subtitle: "Executing Live Integration Unit Tests against Backend REST APIs using provideHttpClient()",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <!-- Left Column: UserService Implementation -->
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-wrench"></i> 🛠️ UserService Implementation</div>
            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary); overflow-y: auto; max-height: 380px;">
              <div style="font-size: 0.7rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.3rem;">user.service.ts</div>
              <pre style="margin: 0; font-size: 0.62rem; font-family: monospace; color: var(--text-main); line-height: 1.36;"><span style="color: #f472b6;">import</span> { Injectable, inject } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;
<span style="color: #f472b6;">import</span> { HttpClient } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/common/http'</span>;
<span style="color: #f472b6;">import</span> { Observable } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'rxjs'</span>;
<span style="color: #f472b6;">import</span> { map } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'rxjs/operators'</span>;
<span style="color: #f472b6;">import</span> { User, CreateUserDto } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./user.model'</span>;

<span style="color: #38bdf8;">@Injectable</span>({ providedIn: <span style="color: #10b981;">'root'</span> })
<span style="color: #f472b6;">export class</span> <span style="color: #38bdf8;">UserService</span> {
  <span style="color: #f472b6;">private</span> http = <span style="color: #38bdf8;">inject</span>(HttpClient);
  <span style="color: #f472b6;">private</span> apiUrl = <span style="color: #10b981;">'https://jsonplaceholder.typicode.com/users'</span>;

  <span style="color: #a78bfa;">getUsers</span>(): Observable&lt;User[]&gt; {
    <span style="color: #f472b6;">return this</span>.http.get&lt;<span style="color: #38bdf8;">any[]</span>&gt;(<span style="color: #f472b6;">this</span>.apiUrl).pipe(
      map((users) =&gt;
        users.map((u) =&gt; ({
          ...u,
          role: u.role || <span style="color: #10b981;">'User'</span>,
          status: u.status || <span style="color: #10b981;">'active'</span>,
        }))
      )
    );
  }

  <span style="color: #a78bfa;">getUserById</span>(id: number): Observable&lt;User&gt; {
    <span style="color: #f472b6;">return this</span>.http.get&lt;<span style="color: #38bdf8;">any</span>&gt;(\`\${<span style="color: #f472b6;">this</span>.apiUrl}/\${id}\`).pipe(
      map((u) =&gt; ({
        ...u,
        role: u.role || <span style="color: #10b981;">'User'</span>,
        status: u.status || <span style="color: #10b981;">'active'</span>,
      }))
    );
  }

  <span style="color: #a78bfa;">createUser</span>(user: CreateUserDto): Observable&lt;User&gt; {
    <span style="color: #f472b6;">const</span> newUser: CreateUserDto = {
      ...user,
      status: user.status || <span style="color: #10b981;">'active'</span>,
    };
    <span style="color: #f472b6;">return this</span>.http.post&lt;User&gt;(<span style="color: #f472b6;">this</span>.apiUrl, newUser);
  }

  <span style="color: #a78bfa;">deleteUser</span>(id: number): Observable&lt;void&gt; {
    <span style="color: #f472b6;">return this</span>.http.delete&lt;void&gt;(\`\${<span style="color: #f472b6;">this</span>.apiUrl}/\${id}\`);
  }
}</pre>
            </div>
          </div>
        </div>

        <!-- Right Column: Real API Integration Spec -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.4rem;"><i class="ph ph-cloud-arrow-up"></i> 🌐 UserService (Real Live API Integration Test)</div>
            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); overflow-y: auto; max-height: 320px; margin-bottom: 0.6rem;">
              <div style="font-size: 0.7rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.3rem;">user.service.integration.spec.ts</div>
              <pre style="margin: 0; font-size: 0.61rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: #f472b6;">import</span> { TestBed } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core/testing'</span>;
<span style="color: #f472b6;">import</span> { provideHttpClient } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/common/http'</span>;
<span style="color: #f472b6;">import</span> { firstValueFrom } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'rxjs'</span>;
<span style="color: #f472b6;">import</span> { UserService } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'./user.service'</span>;

<span style="color: #f472b6;">describe</span>(<span style="color: #10b981;">'UserService (Real Live API Integration Test)'</span>, () =&gt; {
  <span style="color: #f472b6;">let</span> service: UserService;

  <span style="color: #f472b6;">beforeEach</span>(() =&gt; {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        <span style="color: #38bdf8;">provideHttpClient()</span>,
      ],
    });

    service = TestBed.inject(UserService);
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should fetch real live data from JSONPlaceholder backend API'</span>, <span style="color: #f472b6;">async</span> () =&gt; {
    <span style="color: #f472b6;">const</span> users = <span style="color: #f472b6;">await</span> <span style="color: #38bdf8;">firstValueFrom</span>(service.getUsers());
    console.log(<span style="color: #10b981;">'REAL Live API Response from https://jsonplaceholder.typicode.com/users:\\n'</span>, users.slice(0, 2));
    <span style="color: #a78bfa;">expect</span>(users.length).<span style="color: #34d399;">toBeGreaterThan</span>(0);
    <span style="color: #a78bfa;">expect</span>(users[0].id).<span style="color: #34d399;">toBe</span>(1);
    <span style="color: #a78bfa;">expect</span>(users[0].name).<span style="color: #34d399;">toBeTruthy</span>();
    <span style="color: #a78bfa;">expect</span>(users[0].email).<span style="color: #34d399;">toBeTruthy</span>();
  });

  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should fetch real live data from JSONPlaceholder backend API by User ID'</span>, <span style="color: #f472b6;">async</span> () =&gt; {
    <span style="color: #f472b6;">const</span> expectedUser = {
      id: 1,
      name: <span style="color: #10b981;">'Leanne Graham'</span>,
      email: <span style="color: #10b981;">'Sincere@april.biz'</span>
    };
    <span style="color: #f472b6;">const</span> user = <span style="color: #f472b6;">await</span> <span style="color: #38bdf8;">firstValueFrom</span>(service.getUserById(1));
    console.log(<span style="color: #10b981;">'REAL Live API Response from https://jsonplaceholder.typicode.com/users/1:\\n'</span>, user);
    <span style="color: #a78bfa;">expect</span>(user.id).<span style="color: #34d399;">toBe</span>(1);
    <span style="color: #a78bfa;">expect</span>(user).<span style="color: #34d399;">toMatchObject</span>(expectedUser);
  });
});</pre>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 0.45rem 0.75rem;">
              <div style="font-size: 0.72rem; color: #10b981; font-weight: 700; margin-bottom: 0.1rem;">⚡ Live API Integration Key Points</div>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.3;">
                Uses <code>provideHttpClient()</code> to trigger actual network requests against live JSONPlaceholder endpoints. Uses <code>firstValueFrom()</code> for clean <code>async/await</code> testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Demonstrate testing Angular services with real live HTTP network integration calls using provideHttpClient and firstValueFrom."
  },
  {
    id: 15,
    badge: "REAL HTTP EXPLANATION",
    title: "What Happens When We Make a Real HTTP Call?",
    subtitle: "Understanding Network Flow & Lifecycle of Live HTTP Integration Requests",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <!-- Left Side: Image / Architecture Diagram -->
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.5rem;"><i class="ph ph-globe-hemisphere-west"></i> 🌐 Live Network Call Architecture</div>
            <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 10px; padding: 0.6rem; text-align: center; margin-bottom: 0.8rem;">
              <img src="./assets/http-call.png" alt="Real HTTP Call Flow Diagram" style="width: 100%; max-height: 310px; object-fit: contain; border-radius: 6px;" />
            </div>
          </div>

          <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.55rem 0.75rem;">
            <div style="font-size: 0.73rem; color: #38bdf8; font-weight: 700; margin-bottom: 0.15rem;">📡 Real Network Pipeline</div>
            <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Unlike <code>HttpTestingController</code> which intercepts requests in-memory, live HTTP calls open true TCP network sockets to communicate with live API servers.
            </p>
          </div>
        </div>

        <!-- Right Side: When Useful, Why Avoid in Unit Tests, and Key Takeaway -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.15rem 1.25rem;">
          <div>
            <!-- Section 1: When Is a Real HTTP Call Useful? -->
            <div class="card-icon" style="margin-bottom: 0.4rem; font-size: 0.8rem;"><i class="ph ph-check-circle"></i> 💡 When Is a Real HTTP Call Useful?</div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.75rem;">
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-primary); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.75rem;">
                <strong style="color: var(--accent-primary);">Integration testing:</strong> Verify that multiple application layers work together seamlessly.
              </div>
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-secondary); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.75rem;">
                <strong style="color: var(--accent-secondary);">API integration validation:</strong> Verify frontend communicates correctly with real backend endpoints.
              </div>
              <div style="background: var(--surface-glass); border: 1px solid #10b981; border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.75rem;">
                <strong style="color: #10b981;">End-to-end scenarios:</strong> Validate complete application workflows from UI to database.
              </div>
              <div style="background: var(--surface-glass); border: 1px solid #a78bfa; border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.75rem;">
                <strong style="color: #a78bfa;">Contract/API verification:</strong> Confirm frontend works with actual backend response structures.
              </div>
            </div>

            <!-- Section 2: Why Avoid Real HTTP Calls in Unit Tests? -->
            <div style="background: rgba(248, 113, 113, 0.08); border: 1px solid rgba(248, 113, 113, 0.25); border-radius: 8px; padding: 0.5rem 0.7rem; margin-bottom: 0.75rem;">
              <div style="font-size: 0.73rem; color: #f87171; font-weight: 700; margin-bottom: 0.25rem;">⚠️ Why Avoid Real HTTP Calls in Unit Tests?</div>
              <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.75rem; color: var(--text-muted);">
                <div>🐢 <strong>Slower</strong> — Network latency & backend processing delay test suite execution.</div>
                <div>🌐 <strong>Environment-dependent</strong> — Tests fail if backend server goes down or lacks connectivity.</div>
                <div>🔄 <strong>Less deterministic</strong> — Remote API state mutation or data changes break tests.</div>
                <div>💻 <strong>Harder in CI</strong> — Requires live backend availability & credentials in CI pipelines.</div>
                <div>❌ <strong>Less isolated</strong> — Failures stem from external API bugs rather than unit code under test.</div>
              </div>
            </div>
          </div>

          <!-- Section 3: Key Takeaway -->
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.45rem 0.75rem;">
            <div style="font-size: 0.74rem; color: #10b981; font-weight: 700; margin-bottom: 0.15rem;">🎯 Key Takeaway</div>
            <div style="display: flex; justify-content: space-around; font-size: 0.75rem; font-weight: 600; color: var(--text-main);">
              <span>🧪 <strong>Unit Test</strong> &rarr; <span style="color: #38bdf8;">Mock the HTTP layer</span></span>
              <span>⚡ <strong>Integration/E2E Test</strong> &rarr; <span style="color: #10b981;">Use real HTTP/API layer</span></span>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Explain the network mechanics and lifecycle of real live HTTP integration tests in Angular."
  },
  {
    id: 16,
    badge: "ANGULAR LIBRARY CREATION",
    title: "Creating an Angular Library",
    subtitle: "Understanding Angular Libraries, Creation Steps, and Build Workflow",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <!-- Left Column: What is an Angular Library & Creation Steps -->
        <div class="glass-card accent-violet" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.45rem;"><i class="ph ph-package"></i> 📦 What is an Angular Library?</div>
            <p style="font-size: 0.81rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.45;">
              An <strong>Angular Library</strong> is a reusable, standalone Angular project containing components, services, directives, or utilities that can be shared across multiple applications or published to an npm registry.
            </p>

            <div style="background: var(--surface-glass); border: 1px solid var(--accent-primary); border-radius: 8px; padding: 0.6rem 0.8rem; margin-bottom: 0.75rem;">
              <div style="font-size: 0.76rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.35rem;">🛠️ How to Create an Angular Library</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); line-height: 1.4;">
                Run the Angular CLI library generator inside your workspace:
              </div>
              <pre style="margin: 0.35rem 0 0 0; padding: 0.45rem 0.75rem; background: black; border-radius: 6px; font-size: 0.72rem; font-family: monospace; color: #38bdf8;">ng generate library ui-lib
<span style="color: #a2a2a2;"># or using the short alias:</span>
ng g lib ui-lib</pre>
            </div>

            <div style="background: var(--surface-glass); border: 1px solid var(--surface-border); border-radius: 8px; padding: 0.55rem 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.3rem;">📂 Key Workspace Files Created</div>
              <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.7rem; color: var(--text-muted);">
                <div>📁 <code>projects/ui-lib/</code> — Dedicated library source directory</div>
                <div>📄 <code>src/public-api.ts</code> — Barrel export defining public API surface</div>
                <div>⚙️ <code>ng-package.json</code> — Configuration for <code>ng-packagr</code> build tool</div>
                <div>🔗 <code>tsconfig.json</code> — Auto-adds path mapping: <code>"ui-lib": ["dist/ui-lib"]</code></div>
              </div>
            </div>
          </div>

          <div style="margin-top: 0.6rem; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.45rem 0.75rem;">
            <div style="font-size: 0.73rem; color: #38bdf8; font-weight: 700; margin-bottom: 0.1rem;">💡 Modular Architecture Benefit</div>
            <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Decouples shared UI design components and reusable state logic from the main application, enabling team scale and independent versioning.
            </p>
          </div>
        </div>

        <!-- Right Column: Build Commands & Consumption -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem 1.3rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.45rem;"><i class="ph ph-terminal-window"></i> ⚡ Build Commands & Workflow</div>

            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); margin-bottom: 0.75rem;">
              <div style="font-size: 0.72rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.3rem;">1. Build Command</div>
              <pre style="margin: 0; padding: 0.4rem 0.6rem; background: black; border-radius: 6px; font-size: 0.71rem; font-family: monospace; color: #10b981;"><span style="color: #a2a2a2;"># Build library into dist/ui-lib</span>
ng build ui-lib

<span style="color: #a2a2a2;"># Watch mode for continuous development</span>
ng build ui-lib --watch</pre>
            </div>

            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid #a78bfa; margin-bottom: 0.75rem;">
              <div style="font-size: 0.72rem; color: #a78bfa; font-weight: 700; margin-bottom: 0.3rem;">2. Add Scripts to package.json</div>
              <pre style="margin: 0; font-size: 0.7rem; font-family: monospace; color: var(--text-main); line-height: 1.35;">"scripts": {
  "<span style="color: #38bdf8;">build:lib</span>": "ng build ui-lib",
  "<span style="color: #38bdf8;">watch:lib</span>": "ng build ui-lib --watch",
  "<span style="color: #38bdf8;">build</span>": "npm run build:lib && ng build"
}</pre>
            </div>

            <div class="glass-card" style="padding: 0.75rem 0.85rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid #10b981;">
              <div style="font-size: 0.72rem; color: #10b981; font-weight: 700; margin-bottom: 0.3rem;">3. Consuming Library Components in App</div>
              <pre style="margin: 0; font-size: 0.68rem; font-family: monospace; color: var(--text-main); line-height: 1.35;"><span style="color: #f472b6;">import</span> { Component } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;
<span style="color: #f472b6;">import</span> { LibUserFormComponent } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'ui-lib'</span>;

<span style="color: #38bdf8;">@Component</span>({
  selector: <span style="color: #10b981;">'app-root'</span>,
  standalone: <span style="color: #f59e0b;">true</span>,
  imports: [LibUserFormComponent],
  template: <span style="color: #10b981;">\`&lt;lib-user-form&gt;&lt;/lib-user-form&gt;\`</span>
})
<span style="color: #f472b6;">export class</span> <span style="color: #38bdf8;">AppComponent</span> {}</pre>
            </div>
          </div>

          <div style="margin-top: 0.6rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.5rem 0.75rem;">
            <div style="font-size: 0.74rem; color: #10b981; font-weight: 700; margin-bottom: 0.15rem;">
              🎯 Key Library Best Practice
            </div>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Always export components, directives, and models in <code>public-api.ts</code>. Build the library before building or serving the consuming application.
            </p>
          </div>
        </div>
      </div>
    `,
    notes: "Explain Slide 13: What an Angular library is, Angular CLI generation commands, project structure, ng-packagr build commands, and package.json build scripts."
  },
  {
    id: 17,
    badge: "LIBRARY TESTING ARCHITECTURE",
    title: "Testing Angular Library Components",
    subtitle: "Library Component Implementation, Test Spec & Testing Utility Breakdown",
    layout: "split-grid",
    content: `
      <div class="cards-grid-2" style="gap: 1.1rem; align-items: stretch;">
        <!-- Left Column: Two Divisions (Top: Library Component Implementation, Bottom: Test Spec) -->
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <!-- Division 1: Library Component Implementation -->
          <div class="glass-card accent-violet" style="padding: 0.85rem 1.1rem;">
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.82rem;"><i class="ph ph-package"></i> 📦 1. Library Component Implementation</div>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-primary); overflow-y: auto; max-height: 200px;">
              <div style="font-size: 0.68rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.25rem;">lib-user-form.component.ts</div>
              <pre style="margin: 0; font-size: 0.75rem; font-family: monospace; color: var(--text-main); line-height: 1.34;"><span style="color: #f472b6;">import</span> { Component, EventEmitter, Output, inject } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/core'</span>;
<span style="color: #f472b6;">import</span> { FormBuilder, ReactiveFormsModule, Validators } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/forms'</span>;

<span style="color: #38bdf8;">@Component</span>({
  selector: <span style="color: #10b981;">'lib-user-form'</span>,
  standalone: <span style="color: #f59e0b;">true</span>,
  imports: [ReactiveFormsModule],
  template: <span style="color: #10b981;">\`
    &lt;form [formGroup]="form" (ngSubmit)="onSubmit()"&gt;
      &lt;input data-testid="lib-input-name" formControlName="name" placeholder="Enter Name" /&gt;
      &lt;button data-testid="lib-submit-btn" type="submit" [disabled]="form.invalid"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  \`</span>
})
<span style="color: #f472b6;">export class</span> <span style="color: #38bdf8;">LibUserFormComponent</span> {
  <span style="color: #38bdf8;">@Output</span>() submitForm = <span style="color: #f472b6;">new</span> <span style="color: #38bdf8;">EventEmitter</span>&lt;{ name: string }&gt;();
  <span style="color: #f472b6;">private</span> fb = <span style="color: #38bdf8;">inject</span>(FormBuilder);
  form = <span style="color: #f472b6;">this</span>.fb.group({ name: [<span style="color: #10b981;">''</span>, Validators.required] });

  <span style="color: #a78bfa;">onSubmit</span>() {
    <span style="color: #f472b6;">if</span> (<span style="color: #f472b6;">this</span>.form.valid) <span style="color: #f472b6;">this</span>.submitForm.emit(<span style="color: #f472b6;">this</span>.form.getRawValue());
  }
}</pre>
            </div>
          </div>

          <!-- Division 2: Library Testing Spec Code -->
          <div class="glass-card accent-violet" style="padding: 0.85rem 1.1rem;">
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.82rem;"><i class="ph ph-test-tube"></i> 🧪 2. Test Case Spec Implementation</div>
            <div class="glass-card" style="padding: 0.55rem 0.75rem; border-radius: 8px; background: var(--surface-glass); backdrop-filter: blur(8px); border: 1px solid var(--accent-secondary); overflow-y: auto; max-height: 220px;">
              <div style="font-size: 0.68rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.25rem;">lib-user-form.component.spec.ts</div>
              <pre style="margin: 0; font-size: 0.73rem; font-family: monospace; color: var(--text-main); line-height: 1.34;"><span style="color: #f472b6;">import</span> { <span style="color: #38bdf8;">render</span>, <span style="color: #38bdf8;">screen</span>, <span style="color: #38bdf8;">fireEvent</span> } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@testing-library/angular'</span>;
<span style="color: #f472b6;">import</span> { provideNoopAnimations } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'@angular/platform-browser/animations'</span>;
<span style="color: #f472b6;">import</span> { LibUserFormComponent } <span style="color: #f472b6;">from</span> <span style="color: #10b981;">'ui-lib'</span>;

<span style="color: #f472b6;">describe</span>(<span style="color: #10b981;">'LibUserFormComponent'</span>, () =&gt; {
  <span style="color: #38bdf8;">it</span>(<span style="color: #10b981;">'should render, fill input, and emit submitForm event'</span>, <span style="color: #f59e0b;">async</span> () =&gt; {
    <span style="color: #f472b6;">const</span> submitSpy = <span style="color: #38bdf8;">jest.fn()</span>;

    <span style="color: var(--text-muted);">// Render component using Angular Testing Library</span>
    <span style="color: #f59e0b;">await</span> <span style="color: #38bdf8;">render</span>(LibUserFormComponent, {
      componentOutputs: { submitForm: { emit: submitSpy } },
      providers: [provideNoopAnimations()]
    });

    <span style="color: var(--text-muted);">// Query elements by test ID & trigger user events</span>
    <span style="color: #f472b6;">const</span> input = screen.<span style="color: #38bdf8;">getByTestId</span>(<span style="color: #10b981;">'lib-input-name'</span>);
    <span style="color: #f472b6;">const</span> button = screen.<span style="color: #38bdf8;">getByTestId</span>(<span style="color: #10b981;">'lib-submit-btn'</span>);

    fireEvent.<span style="color: #34d399;">input</span>(input, { target: { value: <span style="color: #10b981;">'Jane Doe'</span> } });
    fireEvent.<span style="color: #34d399;">click</span>(button);

    <span style="color: #a78bfa;">expect</span>(submitSpy).<span style="color: #34d399;">toHaveBeenCalledWith</span>({ name: <span style="color: #10b981;">'Jane Doe'</span> });
  });
});</pre>
            </div>
          </div>
        </div>

        <!-- Right Column: Explaining render, screen, fireEvent & all testing utility actions -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.15rem 1.25rem;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.45rem; font-size: 0.85rem;"><i class="ph ph-lightning"></i> ⚡ Angular Testing Library Utilities Breakdown</div>

            <div style="display: flex; flex-direction: column; gap: 0.45rem;">
              <!-- render() explanation -->
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-primary); border-radius: 7px; padding: 0.45rem 0.75rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.15rem;">
                  1. <code>render(Component, options)</code>
                </div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Compiles component into test DOM container without <code>TestBed</code> boilerplate. Automatically manages change detection and accepts <code>componentInputs</code>, <code>componentOutputs</code>, & <code>providers</code>.
                </p>
              </div>

              <!-- screen explanation -->
              <div style="background: var(--surface-glass); border: 1px solid var(--accent-secondary); border-radius: 7px; padding: 0.45rem 0.75rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: var(--accent-secondary); margin-bottom: 0.15rem;">
                  2. <code>screen.getByTestId('id')</code> & Queries
                </div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Global object providing DOM queries. Searching by <code>data-testid</code> or accessible roles ensures tests remain decoupled from CSS classes or internal HTML element restructuring.
                </p>
              </div>

              <!-- fireEvent explanation -->
              <div style="background: var(--surface-glass); border: 1px solid #10b981; border-radius: 7px; padding: 0.45rem 0.75rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: #10b981; margin-bottom: 0.15rem;">
                  3. <code>fireEvent.input()</code> & <code>fireEvent.click()</code>
                </div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Dispatches realistic DOM events (typing into controls, clicking buttons) and automatically triggers Angular change detection after event handlers complete.
                </p>
              </div>

              <!-- provideNoopAnimations() explanation -->
              <div style="background: var(--surface-glass); border: 1px solid #a78bfa; border-radius: 7px; padding: 0.45rem 0.75rem;">
                <div style="font-size: 0.74rem; font-weight: 700; color: #a78bfa; margin-bottom: 0.15rem;">
                  4. <code>provideNoopAnimations()</code> & Spies
                </div>
                <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  Disables UI animation delays during test execution. <code>jest.fn()</code> spies track <code>@Output()</code> event emissions without requiring manual EventEmitter subscriptions.
                </p>
              </div>
            </div>
          </div>

          <div style="margin-top: 0.55rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.45rem 0.75rem;">
            <div style="font-size: 0.73rem; color: #10b981; font-weight: 700; margin-bottom: 0.1rem;">
              🎯 Best Practice Takeaway
            </div>
            <p style="font-size: 0.68rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
              Import <code>render</code>, <code>screen</code>, and <code>fireEvent</code> directly from <code>@testing-library/angular</code> to write clean, user-centric library unit tests.
            </p>
          </div>
        </div>
      </div>
    `,
    notes: "Explain Slide 14: Left side shows library component implementation and testing spec with explicit imports from @testing-library/angular; Right side details render, screen, fireEvent, data-testid, and testing actions."
  },
  {
    id: 18,
    badge: "CODE COVERAGE & METRICS",
    title: "Code Coverage Guidelines",
    subtitle: "Understanding Metrics, Threshold Enforcement, Do's and Don'ts for High-Confidence Testing",
    layout: "vertical-rows",
    content: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <!-- Row 1: What is Code Coverage & Core Metrics + Jest Config -->
        <div class="glass-card accent-violet" style="padding: 0.85rem 1.2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <div class="card-icon" style="font-size: 0.82rem;"><i class="ph ph-chart-pie"></i> 📊 What is Code Coverage & Core Metrics</div>
            <span style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 0.15rem 0.5rem; border-radius: 6px; font-size: 0.68rem; font-family: monospace;">jest --coverage</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1.3fr; gap: 0.55rem; align-items: center;">
            <div style="background: var(--surface-glass); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.4rem 0.55rem; text-align: center;">
              <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 700;">Statements</div>
              <div style="font-size: 0.73rem; color: var(--text-muted);">Executed code statements</div>
            </div>
            <div style="background: var(--surface-glass); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 6px; padding: 0.4rem 0.55rem; text-align: center;">
              <div style="font-size: 0.75rem; color: #a78bfa; font-weight: 700;">Branches</div>
              <div style="font-size: 0.73rem; color: var(--text-muted);">if/else & ternary paths</div>
            </div>
            <div style="background: var(--surface-glass); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 0.4rem 0.55rem; text-align: center;">
              <div style="font-size: 0.75rem; color: #10b981; font-weight: 700;">Functions</div>
              <div style="font-size: 0.73rem; color: var(--text-muted);">Methods & handlers invoked</div>
            </div>
            <div style="background: var(--surface-glass); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 6px; padding: 0.4rem 0.55rem; text-align: center;">
              <div style="font-size: 0.75rem; color: #f59e0b; font-weight: 700;">Lines</div>
              <div style="font-size: 0.73rem; color: var(--text-muted);">Physical lines executed</div>
            </div>
            <div style="background: black; border: 1px solid var(--surface-border); border-radius: 6px; padding: 0.35rem 0.55rem;">
              <div style="font-size: 0.62rem; color: #38bdf8; font-weight: 700; margin-bottom: 0.15rem;">jest.config.js Threshold</div>
              <pre style="margin: 0; font-size: 0.58rem; font-family: monospace; color: #10b981; line-height: 1.25;">coverageThreshold: {
  global: { statements: 80, branches: 85 }
}</pre>
            </div>
          </div>
        </div>

        <!-- Row 2: What You HAVE TO DO (Do's) -->
        <div class="glass-card" style="padding: 0.85rem 1.2rem; border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
          <div class="card-icon" style="margin-bottom: 0.35rem; color: #10b981; font-size: 0.82rem;"><i class="ph ph-check-circle"></i> ✅ WHAT YOU HAVE TO DO (Best Practices)</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; font-size: 0.75rem; color: var(--text-muted);">
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2);">
              <strong style="color: var(--text-main);">🎯 Cover Critical Business & Edge Cases:</strong> Focus tests on complex state transitions, form validators, signal computeds, and HTTP error branches.
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2);">
              <strong style="color: var(--text-main);">🛡️ Enforce CI Build Gates:</strong> Automatically block PRs in GitHub Actions if total coverage drops below threshold (e.g. 85% branch coverage).
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2);">
              <strong style="color: var(--text-main);">🧹 Exclude Non-Logic Artifacts:</strong> Ignore barrel files (<code>public-api.ts</code>), index exports, and environment configs via <code>coveragePathIgnorePatterns</code>.
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2);">
              <strong style="color: var(--text-main);">🧪 Test User Interactions & DOM:</strong> Verify actual rendered output and user events using Angular Testing Library rather than testing private internal methods.
            </div>
          </div>
        </div>

        <!-- Row 3: What You DON'T DO (Don'ts) -->
        <div class="glass-card" style="padding: 0.85rem 1.2rem; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.04);">
          <div class="card-icon" style="margin-bottom: 0.35rem; color: #ef4444; font-size: 0.82rem;"><i class="ph ph-x-circle"></i> ❌ WHAT YOU DON'T DO (Pitfalls to Avoid)</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; font-size: 0.75rem; color: var(--text-muted);">
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
              <strong style="color: var(--text-main);">🚫 Don't Chase 100% Blindly:</strong> 100% coverage does NOT guarantee zero bugs. Chasing 100% leads to fragile, low-value tests that break on minor refactors.
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
              <strong style="color: var(--text-main);">👻 Don't Write Assertless "Ghost" Tests:</strong> Invoking functions without <code>expect()</code> assertions just to pad coverage numbers gives false security without validating behavior.
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
              <strong style="color: var(--text-main);">🚫 Don't Test Framework / Material Internals:</strong> Avoid testing Angular core framework logic or Material library internal DOM elements.
            </div>
            <div style="background: var(--surface-glass); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
              <strong style="color: var(--text-main);">⚠️ Don't Ignore Branch Coverage:</strong> Statement coverage alone can hide unhandled <code>else</code> or <code>catch</code> blocks. Always prioritize branch coverage.
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Explain Slide 15: Code Coverage concept, core metrics (Statements, Branches, Functions, Lines), Jest threshold enforcement, and explicit Do's and Don'ts for high-quality testing."
  },
  {
    id: 19,
    badge: "ENTERPRISE BEST PRACTICES",
    title: "Enterprise Testing Best Practices",
    subtitle: "Architectural Principles, Test Hygiene, and Scalable Testing Strategies for Production Teams",
    layout: "cards-grid-4",
    content: `
      <div class="cards-grid-2" style="gap: 0.9rem; align-items: stretch;">
        <!-- Pillar 1: Architecture & Test Isolation -->
        <div class="glass-card accent-violet" style="padding: 0.9rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.85rem;"><i class="ph ph-buildings"></i> 🏛️ 1. Architecture & Test Isolation</div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; color: var(--text-muted);">
              <div>🎯 <strong>Test Behavior, Not Implementation:</strong> Focus on user expectations instead of testing private methods or internal state.</div>
              <div>🧪 <strong>Follow AAA Pattern:</strong> Structure specs cleanly as <strong>Arrange &rarr; Act &rarr; Assert</strong>.</div>
              <div>🎭 <strong>Mock External Dependencies:</strong> Mock HTTP calls, browser APIs, and 3rd-party services to isolate unit tests.</div>
              <div>🚫 <strong>Avoid Brittle Selectors:</strong> Use accessible queries (<code>getByRole()</code>) or <code>data-testid</code> over CSS selectors.</div>
            </div>
          </div>
          <div style="margin-top: 0.5rem; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.72rem; color: #38bdf8;">
            💡 <em>Rule: Tests should verify <strong>what</strong> the component does, not <strong>how</strong> it is implemented internally.</em>
          </div>
        </div>

        <!-- Pillar 2: Performance & Test Speed -->
        <div class="glass-card accent-violet" style="padding: 0.9rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.85rem;"><i class="ph ph-gauge"></i> ⚡ 2. Speed & Readable Codebase</div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; color: var(--text-muted);">
              <div>⚡ <strong>Keep Tests Fast:</strong> Prefer unit tests over real API calls; execute test runners in parallel (<code>--maxWorkers=50%</code>).</div>
              <div>🔄 <strong>Avoid Test Duplication:</strong> Reuse setup utilities and mock data factories without obscuring spec intent.</div>
              <div>🔍 <strong>Keep Tests Readable:</strong> Specs should read like self-documenting code without requiring source code inspection.</div>
              <div>💨 <strong>Disable UI Animations:</strong> Inject <code>provideNoopAnimations()</code> to eliminate artificial timing delays.</div>
            </div>
          </div>
          <div style="margin-top: 0.5rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.72rem; color: #10b981;">
            ⚡ <em>Goal: Keep total unit test suite execution under 30 seconds across the enterprise repository.</em>
          </div>
        </div>

        <!-- Pillar 3: Test Hygiene & Error Cases -->
        <div class="glass-card accent-violet" style="padding: 0.9rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.85rem;"><i class="ph ph-broom"></i> 🧹 3. Test Hygiene & Robustness</div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; color: var(--text-muted);">
              <div>🧩 <strong>Keep Tests Independent:</strong> Ensure specs are idempotent and run isolated without relying on shared state.</div>
              <div>🛡️ <strong>Test Error & Edge Cases:</strong> Validate empty states, validation errors, HTTP failures, and boundary conditions.</div>
              <div>📝 <strong>Write Meaningful Test Names:</strong> Describe expected behaviors clearly: <code>it('should display error on invalid input')</code>.</div>
              <div>🧹 <strong>Strict Cleanup:</strong> Execute <code>jest.clearAllMocks()</code> and <code>httpMock.verify()</code> in <code>afterEach()</code>.</div>
            </div>
          </div>
          <div style="margin-top: 0.5rem; background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.72rem; color: #a78bfa;">
            🛡️ <em>Rule: Prevent test leakage — no test should leave lingering HTTP requests or global state mutations.</em>
          </div>
        </div>

        <!-- Pillar 4: CI/CD & Metrics -->
        <div class="glass-card accent-violet" style="padding: 0.9rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-icon" style="margin-bottom: 0.35rem; font-size: 0.85rem;"><i class="ph ph-git-merge"></i> 🚀 4. CI/CD Integration & Coverage</div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; color: var(--text-muted);">
              <div>🚀 <strong>Integrate with CI/CD:</strong> Trigger automated tests on every Pull Request to catch regressions early.</div>
              <div>📊 <strong>Use Coverage as a Guide:</strong> Track statement and branch metrics to spot untested paths without chasing 100%.</div>
              <div>🔒 <strong>Enforce Quality Gates:</strong> Set automated PR build gates in GitHub Actions to block breaking commits.</div>
              <div>⚡ <strong>Fail-Fast Pipeline:</strong> Run TypeScript compilation & unit specs before launching E2E test suites.</div>
            </div>
          </div>
          <div style="margin-top: 0.5rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 6px; padding: 0.35rem 0.6rem; font-size: 0.72rem; color: #f59e0b;">
            🔒 <em>Gatekeeper: Continuous Integration blocks any commit that breaks existing tests or drops coverage.</em>
          </div>
        </div>
      </div>
    `,
    notes: "Explain Slide 16: Enterprise Testing Best Practices incorporating the 12 core principles across Architecture, Performance, Hygiene, and CI/CD."
  },
  {
    id: 20,
    badge: "CONCLUSION",
    title: "Thank You!",
    subtitle: "Questions & Answers",
    layout: "hero-layout",
    content: `
      <div class="glass-card" style="padding: 3rem 2rem; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <h1 style="font-size: 3.5rem; font-weight: 800; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1.5rem; letter-spacing: -0.5px;">
          Thank You!
        </h1>
        <div style="font-size: 1.8rem; font-weight: 600; color: var(--accent-secondary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
          <span>💬 Questions & Answers</span>
        </div>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; line-height: 1.6; margin: 0;">
          Feel free to ask any questions or share your thoughts!
        </p>
      </div>
    `,
    notes: "Wrap up the presentation, thank the audience, and open the floor for Questions & Answers."
  }
];
