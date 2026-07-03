/**
 * MITAN — Shared Tailwind design-token configuration
 * Single source of truth extracted from mitan_design_system/DESIGN.md
 * Previously duplicated verbatim inside 7 separate code.html exports (STEP 2 dedup).
 * Loaded via <script src="/styles/tailwind-config.js"></script>
 */
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#dadad8",
                    "on-tertiary-fixed-variant": "#304b4b",
                    "primary": "#006c4b",
                    "on-tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#aecccc",
                    "surface-bright": "#faf9f7",
                    "outline-variant": "#bbcac0",
                    "on-secondary-fixed": "#241a00",
                    "on-surface": "#1a1c1b",
                    "primary-fixed": "#71fbc0",
                    "surface": "#faf9f7",
                    "on-surface-variant": "#3c4a42",
                    "on-secondary-container": "#745c00",
                    "on-primary-fixed-variant": "#005137",
                    "tertiary-fixed": "#cae8e8",
                    "error": "#ba1a1a",
                    "inverse-surface": "#2f3130",
                    "error-container": "#ffdad6",
                    "surface-container-highest": "#e3e2e0",
                    "secondary-fixed-dim": "#e9c349",
                    "on-background": "#1a1c1b",
                    "on-error": "#ffffff",
                    "surface-container-low": "#f4f3f1",
                    "surface-container": "#efeeec",
                    "surface-tint": "#006c4b",
                    "outline": "#6c7a72",
                    "tertiary-container": "#86a3a3",
                    "secondary-container": "#fed65b",
                    "on-primary-container": "#003d28",
                    "primary-container": "#00b37e",
                    "on-primary": "#ffffff",
                    "surface-variant": "#e3e2e0",
                    "on-tertiary-container": "#1d3939",
                    "on-secondary-fixed-variant": "#574500",
                    "primary-fixed-dim": "#50dea5",
                    "tertiary": "#476363",
                    "on-error-container": "#93000a",
                    "inverse-primary": "#50dea5",
                    "on-tertiary-fixed": "#022020",
                    "secondary-fixed": "#ffe088",
                    "on-secondary": "#ffffff",
                    "inverse-on-surface": "#f1f1ef",
                    "surface-container-high": "#e9e8e6",
                    "surface-container-lowest": "#ffffff",
                    "background": "#faf9f7",
                    "secondary": "#735c00",
                    "on-primary-fixed": "#002114"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-md": "16px",
                    "stack-sm": "8px",
                    "container-max": "1200px",
                    "unit": "8px",
                    "stack-lg": "32px",
                    "margin-mobile": "16px",
                    "margin-desktop": "40px",
                    "gutter": "24px"
            },
            "fontFamily": {
                    "headline-sm": ["Manrope"],
                    "headline-md": ["Manrope"],
                    "label-md": ["Plus Jakarta Sans"],
                    "display-lg": ["Manrope"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "body-sm": ["Plus Jakarta Sans"],
                    "body-md": ["Plus Jakarta Sans"],
                    "display-lg-mobile": ["Manrope"]
            },
            "fontSize": {
                    "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
