const CKEConfig = () => ({
  presets: {
    default: {
      editorConfig: {
        allowedContent: true,
        removePlugins: ["Markdown"],
        pasteFromOffice: {
          addFilter(html) {
            // Filter untuk membersihkan elemen HTML dari Google Docs
            html = html.replace(/style="[^"]*font-family:[^;]+;?"/g, ""); // Hapus font-family
            html = html.replace(/style="[^"]*font-size:[^;]+;?"/g, ""); // Hapus font-size
            return html;
          },
        },
        htmlSupport: {
          allow: [
            {
              name: "span", // Mengizinkan elemen <span>
              attributes: ["style"], // Hanya atribut "style" tertentu yang diizinkan
              styles: {
                color: true, // Hanya izinkan warna teks
              },
            },
            {
              name: "p", // Mengizinkan elemen paragraf
            },
            {
              name: "strong", // Mengizinkan <strong> untuk bold
            },
            {
              name: "br", // Mengizinkan <br> untuk line break
            },
          ],
          disallow: [
            {
              name: "p",
              attributes: ["style"], // Hilangkan semua atribut style dari <p>
            },
            {
              name: "span",
              attributes: ["style"], // Hilangkan semua atribut style dari <p>
              styles: {
                "font-family": true, // Hilangkan style font-family
                "font-size": true, // Hilangkan style font-size
                "line-height": true, // Hilangkan style line-height
                "background-color": true, // Hilangkan style background-color
                "font-weight": true, // Hilangkan style font-weight
                "vertical-align": true, // Hilangkan style vertical-align
                "white-space": true, // Hilangkan white-space
              },
            },
          ],
        },
        toolbar: {
          items: [
            "heading",
            "|",
            "fontSize",
            "fontColor",
            "|",
            "alignment",
            "|",
            "bold",
            "italic",
            "underline",
            "subscript",
            "superscript",
            "strikethrough",
            "link",
            "removeFormat",
            "|",
            "outdent",
            "indent",
            "horizontalLine",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "StrapiMediaLib",
            "insertTable",
            // "highlight",
            "pageBreak",
            "blockQuote",
            "|",
            "htmlEmbed",
            "code",
            "codeBlock",
            "specialCharacters",
            "|",
            "sourceEditing",
            "undo",
            "redo",
          ],
          shouldNotGroupWhenFull: true,
        },
        link: {
          addTargetToExternalLinks: true,
        },
        fontSize: {
          options: [
            "default",
            "tiny",
            "small",
            "big",
            "huge",
            10,
            11,
            12,
            14,
            16,
            18,
            20,
            24,
            26,
            28,
            30,
            32,
          ],
          supportAllValues: false,
        },
        fontFamily: {
          options: ["default"],
          supportAllValues: false,
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        image: {
          resizeUnit: "%",
          resizeOptions: [
            {
              name: "resizeImage:original",
              value: null,
              icon: "original",
            },
            {
              name: "resizeImage:25",
              value: "25",
              icon: "small",
            },
            {
              name: "resizeImage:50",
              value: "50",
              icon: "medium",
            },
            {
              name: "resizeImage:75",
              value: "75",
              icon: "large",
            },
          ],
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
            "resizeImage:25",
            "resizeImage:50",
            "resizeImage:75",
            "resizeImage:original",
          ],
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
            "toggleTableCaption",
          ],
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
            {
              model: "h2b",
              view: { name: "h2", classes: "ck-heading_h2_b" },
              title: "H2 (border)",
              class: "ck-heading_heading2",
              converterPriority: "high",
            },
            {
              model: "h3b",
              view: { name: "h3", classes: "ck-heading_h3_b" },
              title: "H3 (border)",
              class: "ck-heading_heading3",
              converterPriority: "high",
            },
          ],
        },
      },
    },
  },
});
