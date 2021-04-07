package main

import (
	"bytes"
	"embed"
	"mime"
	"net/url"
	"path/filepath"
	"strings"
	"time"

	/*
	   #cgo darwin LDFLAGS: -framework CoreGraphics

	   #if defined(__APPLE__)
	   #include <CoreGraphics/CGDisplayConfiguration.h>
	   int display_width() {
	   return CGDisplayPixelsWide(CGMainDisplayID());
	   }
	   int display_height() {
	   return CGDisplayPixelsHigh(CGMainDisplayID());
	   }
	   #else
	   int display_width() {
	   return 0;
	   }
	   int display_height() {
	   return 0;
	   }
	   #endif
	*/
	"C"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/webview/webview"
)

//go:embed assets
var embededFiles embed.FS

//go:embed index.html
var embededIndexHtml []byte

func staticMW(indexHtml []byte) func(next echo.HandlerFunc) echo.HandlerFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) (err error) {
			p := c.Request().URL.Path
			p, err = url.PathUnescape(p)
			if err != nil {
				return err
			}
			name := strings.Replace(p, "/", "", 1)
			contentType := mime.TypeByExtension(filepath.Ext(name))
			if contentType == "" {
				return c.Stream(200, "text/html", bytes.NewBuffer(indexHtml))
			}
			fi, err := embededFiles.Open(name)
			if err != nil {
				return err
			}
			return c.Stream(200, contentType, fi)
		}
	}
}

func main() {
	e := echo.New()
	middleware.DefaultTimeoutConfig.Timeout = time.Second * 30
	e.IPExtractor = echo.ExtractIPDirect()
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.BodyLimit("1MB"))
	e.Use(middleware.RateLimiter(middleware.NewRateLimiterMemoryStore(20)))
	e.Use(middleware.Gzip())
	e.Use(middleware.RequestID())
	e.Use(middleware.Timeout())
	e.Use(staticMW(embededIndexHtml))
	go func() {
		if err := e.Start(":3005"); err != nil {
			panic("Failed to start server")
		}
	}()
	w := webview.New(true)
	defer w.Destroy()
	w.SetTitle("Indian Bible App")
	width := int(C.display_width())
	height := int(C.display_height())

	if width == 0 || height == 0 {
		width = 1024
		height = 768
	}
	w.SetSize(width, height, webview.HintNone)
	w.Navigate("http://0.0.0.0:3005")
	w.Run()
}

// mkdir icon.iconset
// sips -z 16 16 "assets/logo.png" --out icon.iconset/icon_16x16.png
// sips -z 32 32 "assets/logo.png" --out icon.iconset/icon_16x16@2x.png
// cp icon.iconset/icon_16x16@2x.png icon.iconset/icon_32x32.png
// sips -z 64 64 "assets/logo.png" --out icon.iconset/icon_32x32@2x.png
// sips -z 128 128 "assets/logo.png" --out icon.iconset/icon_128x128.png
// sips -z 256 256 "assets/logo.png" --out icon.iconset/icon_128x128@2x.png
// cp icon.iconset/icon_128x128@2x.png icon.iconset/icon_256x256.png
// sips -z 512 512 "assets/logo.png" --out icon.iconset/icon_256x256@2x.png
// cp icon.iconset/icon_256x256@2x.png icon.iconset/icon_512x512.png
// sips -z 1024 1024 "assets/logo.png" --out icon.iconset/icon_512x512@2x.png
// iconutil -c icns icon.iconset
// rm -R icon.iconset
// go build -o IndianBible.app/Contents/MacOS/bible
