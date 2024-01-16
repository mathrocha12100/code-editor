use lazy_static::lazy_static;
use serde::{Deserialize, Serialize};
use syntect::dumps::from_dump_file;
use syntect::html::{ClassStyle, ClassedHTMLGenerator};
use syntect::parsing::SyntaxSet;
use syntect::util::LinesWithEndings;

lazy_static! {
    static ref SS: SyntaxSet = SyntaxSet::load_defaults_newlines();
    static ref TS: SyntaxSet = {
        from_dump_file("assets/dumps/ts.packdump")
            .expect("Não foi possível carregar o arquivo de dump de sintaxe TypeScript")
    };
    static ref TSX: SyntaxSet = {
        from_dump_file("assets/dumps/tsx.packdump")
            .expect("Não foi possível carregar o arquivo de dump de sintaxe TSX")
    };
    static ref POWERSHELL: SyntaxSet = {
        from_dump_file("assets/dumps/cmd.packdump")
            .expect("Não foi possível carregar o arquivo de dump de sintaxe PowerShell")
    };
}

#[derive(Serialize, Deserialize)]
pub struct HighlightSyntaxResult {
    html_code: String,
    lines: usize,
}

#[tauri::command]
pub fn highlight_syntax(code: &str, syntax_extension: &str) -> HighlightSyntaxResult {
    let syntax_set = match syntax_extension {
        "ts" => &*TS,
        "tsx" => &*TSX,
        "cmd" => &*POWERSHELL,
        _ => &*SS, // Padrão para o conjunto de sintaxes padrão
    };

    let syntax = syntax_set
        .find_syntax_by_extension(syntax_extension)
        .unwrap_or_else(|| syntax_set.find_syntax_plain_text());

    let mut html_generator =
        ClassedHTMLGenerator::new_with_class_style(syntax, &syntax_set, ClassStyle::Spaced);

    let mut amount_of_lines: usize = 0;

    for line in LinesWithEndings::from(code) {
        amount_of_lines += 1;
        let _ = html_generator.parse_html_for_line_which_includes_newline(line);
    }

    let html = html_generator.finalize();

    HighlightSyntaxResult {
        html_code: html,
        lines: amount_of_lines,
    }
}
