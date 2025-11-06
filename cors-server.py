#!/usr/bin/env python3
"""Simple HTTP server with CORS enabled for testing Scratch extensions locally."""

import http.server
import socketserver

PORT = 8080

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
    print(f"Serving with CORS at http://localhost:{PORT}")
    print(f"Extension URL: http://localhost:{PORT}/dist/microbitMore.mjs")
    print("Press Ctrl+C to stop")
    httpd.serve_forever()
