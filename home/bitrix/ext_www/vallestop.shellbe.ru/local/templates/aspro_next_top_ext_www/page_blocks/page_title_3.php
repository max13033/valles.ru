<div class="top_inner_block_wrapper maxwidth-theme">
	<div class="page-top-wrapper grey v3">
		<section class="page-top maxwidth-theme <?CNext::ShowPageProps('TITLE_CLASS');?>">
			<div class="page-top-main">
				<?=$APPLICATION->ShowViewContent('product_share')?>
				<h1 id="pagetitle"><?$APPLICATION->ShowTitle(false)?></h1>
			</div>
			<?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb", 
	"next", 
	array(
		"START_FROM" => "0",
		"PATH" => "",
		"SITE_ID" => "s2",
		"SHOW_SUBSECTIONS" => "N",
		"COMPONENT_TEMPLATE" => "next",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);?>
		</section>
	</div>
</div>