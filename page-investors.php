<?php
/**
 * Template Name: Investors
 * The template for displaying a generic page.
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render(['page-investors.twig', 'page.twig'], $context);
