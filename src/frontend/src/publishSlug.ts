/**
 * Publish/deploy domain slug configuration
 * Must be 5-50 characters, containing only lowercase letters, numbers, and hyphens
 */

export const PUBLISH_SLUG = "romantic-valentine";

/**
 * Validates a publish slug against platform requirements
 * @param slug - The slug to validate
 * @returns true if valid, throws error if invalid
 */
export function validatePublishSlug(slug: string): boolean {
  const minLength = 5;
  const maxLength = 50;
  const validPattern = /^[a-z0-9-]+$/;

  if (slug.length < minLength || slug.length > maxLength) {
    throw new Error(
      `Invalid publish slug: "${slug}". Must be between ${minLength} and ${maxLength} characters long.`
    );
  }

  if (!validPattern.test(slug)) {
    throw new Error(
      `Invalid publish slug: "${slug}". Must contain only lowercase letters, numbers, and hyphens.`
    );
  }

  return true;
}

// Validate on module load
validatePublishSlug(PUBLISH_SLUG);
