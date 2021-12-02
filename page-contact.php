<?php
/**
 * Template Name: Contact
 * The template for displaying the Contact page.
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;
$context = Timber::get_context();
		$context['google_map'] = new TimberPost();
		$html = Timber::compile('components/contact_map.twig', $context, 6000);
		echo $html;
Timber::render( 'page-contact.twig', $data );
