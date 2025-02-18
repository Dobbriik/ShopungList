import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://138.68.80.160:777',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '/api'),
			},
		},
	},
})
