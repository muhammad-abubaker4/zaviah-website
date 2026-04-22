import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="container max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

          <div className="prose prose-neutral mt-10 max-w-none text-muted-foreground dark:prose-invert">
            <p>
              Zaviah respects your privacy. This page explains what
              information we may collect when you use our website, how we use it, and your choices.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">Information we collect</h2>
            <p>
              We may receive information you choose to share with us, for example when you email us, message us on
              WhatsApp or social channels, or submit forms linked from this site. We may also receive basic technical
              data that browsers send automatically (such as general device or browser type) through standard hosting
              or analytics tools if we enable them in the future.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">How we use information</h2>
            <p>
              We use contact and program-related information to respond to inquiries, run youth programs and
              partnerships, improve our website, and keep our community safe. We do not sell your personal information.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">Photos and events</h2>
            <p>
              Event photos on our site are used to highlight community impact. If you appear in a photo and would
              like it reviewed or removed, contact us at the email below and we will work with you in good faith.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">Third-party links</h2>
            <p>
              Our site may link to Google Forms, social networks, or partner sites. Those services have their own
              privacy policies. Please read them when you leave our site.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:zaviahorg@gmail.com" className="font-medium text-primary hover:underline">
                zaviahorg@gmail.com
              </a>
            </p>

            <p className="mt-8 text-sm">
              This policy is provided for transparency. It is not legal advice. For formal legal questions, consult a
              qualified professional in your jurisdiction.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
