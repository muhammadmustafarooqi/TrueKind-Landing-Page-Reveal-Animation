      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(CustomEase);
        CustomEase.create("hop", "0.9, 0, 0.1, 1");

        const tl = gsap.timeline({
          delay: 0.3,
          defaults: {
            ease: "hop",
          },
          onComplete: () => console.log("Animation sequence completed"),
        });

        const counts = document.querySelectorAll(".count");

        counts.forEach((count, index) => {
          const digits = count.querySelectorAll(".digit h1");

          // Animate digits coming in
          tl.to(
            digits,
            {
              y: "0%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1
          );

          if (index < counts.length - 1) {
            tl.to(
              digits,
              {
                y: "-100%",
                duration: 1,
                stagger: 0.075,
              },
              index * 1 + 1
            );
          } else {
            tl.to(
              digits,
              {
                y: "-100%",
                duration: 1,
                stagger: 0.075,
                delay: 0.5, 
              },
              index * 1 + 1
            );
          }
        });

        tl.to(".spinner", {
          opacity: 0,
          duration: 0.3,
        });

        tl.to(
          ".word h1",
          {
            y: "0%",
            duration: 1,
          },
          "<"
        );

        tl.to(".divider", {
          scaleY: "100%",
          duration: 1,
          onComplete: () => {
            gsap.to(".divider", {
              opacity: 0,
              duration: 0.4,
              delay: 0.3,
            });
          },
        });

        tl.to("#word-1 h1", {
          y: "100%",
          duration: 1,
          delay: 0.3,
        });

        tl.to(
          "#word-2 h1",
          {
            y: "-100%",
            duration: 1,
          },
          "<"
        );

        tl.to(".block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            console.log("Starting hero image scale");
            gsap.to(".hero-img", {
              scale: 1,
              duration: 2,
              ease: "hop",
            });
          },
        });

        tl.to(
          [".logo a", ".nav-links a"],
          {
            y: "0%",
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
          },
          "<0.2"
        );

        tl.to(
          [".line h1", ".line p"],
          {
            y: "0%",
            duration: 1.5,
            stagger: 0.2,
          },
          "<"
        );

        tl.to(
          ".cta",
          {
            scale: 1,
            duration: 1.5,
            delay: 0.75,
          },
          "<"
        );

        tl.to(
          ".cta-icon",
          {
            scale: 1,
            duration: 1.5,
          },
          "<0.2"
        );

        tl.to(
          ".cta-lable p",
          {
            y: "0%",
            duration: 1.5,
          },
          "<0.1"
        );
      });
