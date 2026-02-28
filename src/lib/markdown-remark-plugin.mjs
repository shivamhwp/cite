import { visit } from "unist-util-visit";

export function remarkMarkdownClasses() {
  return (tree) => {
    visit(tree, "html", (node) => {
      // Add classes to ul elements
      node.value = node.value.replace(
        /<ul(\s[^>]*)?>(?!.*class=)/g,
        '<ul class="pl-6 sm:pl-5 space-y-2 mb-4 list-disc list-outside"$1>',
      );

      // Add classes to ol elements
      node.value = node.value.replace(
        /<ol(\s[^>]*)?>(?!.*class=)/g,
        '<ol class="pl-6 sm:pl-5 space-y-2 mb-4 list-decimal list-outside"$1>',
      );

      // Add classes to li elements
      node.value = node.value.replace(
        /<li(\s[^>]*)?>(?!.*class=)/g,
        '<li class="mb-1 leading-relaxed pl-0 ml-0"$1>',
      );
    });
  };
}
