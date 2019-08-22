import { createElement } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("josh/block-workshop", {
  title: __("Hi Roy Block"),
  category: "widgets",
  supports: {
    html: false
  },
  edit({ className }) {
    return (
      <div className={className}>
        <p>Hi Roy</p>
      </div>
    );
  },
  save({ className }) {
    return (
      <div className={className}>
        <p>Hi Roy</p>
      </div>
    );
  }
});
