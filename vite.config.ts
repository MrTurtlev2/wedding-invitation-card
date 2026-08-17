import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins: [react(), tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',

            manifest: {
                name: 'Weronika & Marek',
                short_name: 'W&M',
                description: 'Wedding Weekend nad jeziorem Como',
                theme_color: '#FFFFFF',
                background_color: '#FFFFFF',
                display: 'standalone',

                icons: [
                    {
                        src: '/icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
})
