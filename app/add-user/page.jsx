"use client";
import { useState } from "react";
import Link from "next/link"; // ✅ Import Next.js Link
import styles from "./add-user.module.scss";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Submitted:", formData);
    // Later: Send data to API or DB
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Add New User</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter user email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* ✅ Forgot Password link */}
          <div className={styles.forgotPassword}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add User
          </button>
        </form>

        {/* ✅ Signup link */}
        <div className={styles.signupLink}>
          <p>
            Don’t have an account?{" "}
            <Link href="/signup" className={styles.signupText}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
