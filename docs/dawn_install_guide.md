# 60-Second Setup Guide: Installing CRO Supply-Pack Section on Shopify Dawn

This guide is designed for merchants running Shopify Dawn (OS 2.0) who want to add high-converting 1-3-6 quantity break bundle cards to their product page without paying for monthly apps.

## Method A: Add as a Custom Section (Recommended)

1. Open your Shopify Admin -> **Online Store** -> **Themes**.
2. Click **...** (three dots) next to Dawn -> **Edit code**.
3. Under the **Sections** folder on the left sidebar, click **Add a new section**.
4. Name the section: `bundle-packs-cro.liquid` (make sure it ends with `.liquid`).
5. Delete any placeholder code and paste the complete content of `bundle-packs-cro.liquid`.
6. Click **Save** in the top right corner.

## Method B: Customizing in Theme Editor

1. Go back to **Themes** -> click **Customize** on Dawn.
2. Navigate to your **Default product** template using the top dropdown selector.
3. On the left sidebar, under **Template**, click **Add section**.
4. Search for `CRO Supply Packs Bundle` and click to add it.
5. In the right-side configuration panel:
   - Configure Tier 1, Tier 2, and Tier 3 prices, titles, and discount text.
   - Enter your respective Shopify Variant IDs for 1-bottle, 3-bottle, and 6-bottle variants (found in Shopify Admin -> Products -> Variants -> click variant -> copy number at end of URL).
   - Toggle the Partner Automation Hook (powered by Kaching Bundles) if you want to monetize or automate inventory sync.
6. Drag the section directly below your Product Information buy box or replace the default variant picker.
7. Click **Save**.
